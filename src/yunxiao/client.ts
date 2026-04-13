import { normalizePath, requestUrl, type DataAdapter } from "obsidian";
import type YunxiaoPlugin from "../main";
import type {
	SearchResult,
	YunxiaoApiCatalogNode,
	YunxiaoApiDocumentDetail,
	YunxiaoApiFunction,
	YunxiaoApiFunctionGroup,
	YunxiaoUser,
	YunxiaoWorkitem,
} from "../types";
import { EMBEDDED_API_CATALOG } from "./catalog-data";
import { buildApiFunctionTree, flattenApiFunctions, parseCatalogNodes, readApiCatalogFile } from "./doc-functions";

interface JsonObject {
	[key: string]: unknown;
}

export class YunxiaoClient {
	private plugin: YunxiaoPlugin;
	private apiFunctionTreePromise: Promise<YunxiaoApiFunctionGroup> | null = null;

	constructor(plugin: YunxiaoPlugin) {
		this.plugin = plugin;
	}

	private get baseDomain(): string {
		const raw = this.plugin.settings.domain.trim();
		if (!raw) {
			throw new Error("请先在插件设置中配置服务域名。");
		}
		if (raw.startsWith("http://") || raw.startsWith("https://")) {
			return raw.replace(/\/+$/, "");
		}
		return `https://${raw.replace(/\/+$/, "")}`;
	}

	private get token(): string {
		const token = this.plugin.settings.token.trim();
		if (!token) {
			throw new Error("请先在插件设置中配置个人访问令牌。");
		}
		return token;
	}

	private async request<T>(method: string, path: string, body?: JsonObject): Promise<T> {
		const url = `${this.baseDomain}${path}`;
		const response = await requestUrl({
			url,
			method,
			headers: {
				"Content-Type": "application/json",
				"x-yunxiao-token": this.token,
			},
			body: body ? JSON.stringify(body) : undefined,
		});

		if (response.status >= 400) {
			const message = typeof response.text === "string" && response.text.length > 0
				? response.text
				: response.json ? JSON.stringify(response.json) : `HTTP ${response.status}`;
			throw new Error(`请求失败 (${response.status}): ${message}`);
		}

		if (response.json !== null && response.json !== undefined) {
			return response.json as T;
		}

		return {} as T;
	}

	async getUserByToken(): Promise<YunxiaoUser> {
		return await this.request<YunxiaoUser>("GET", "/oapi/v1/platform/user");
	}

	async searchWorkitems(payload: JsonObject): Promise<SearchResult<YunxiaoWorkitem>> {
		const response = await this.request<JsonObject>("POST", "/oapi/v1/projex/workitems/search", payload);
		return {
			items: extractList<YunxiaoWorkitem>(response),
			total: extractTotal(response),
		};
	}

	async getWorkitem(workitemId: string): Promise<YunxiaoWorkitem> {
		return await this.request<YunxiaoWorkitem>("GET", `/oapi/v1/projex/workitems/${encodeURIComponent(workitemId)}`);
	}

	async updateWorkitem(workitemId: string, payload: JsonObject): Promise<void> {
		await this.request<JsonObject>("PUT", `/oapi/v1/projex/workitems/${encodeURIComponent(workitemId)}`, payload);
	}

	async createEffortRecord(workitemId: string, payload: JsonObject): Promise<void> {
		await this.request<JsonObject>("POST", `/oapi/v1/projex/workitems/${encodeURIComponent(workitemId)}/effortRecords`, payload);
	}

	async getApiCatalogNodes(): Promise<YunxiaoApiCatalogNode[]> {
		const overridePath = this.plugin.settings.apiCatalogPath.trim();
		if (!overridePath) {
			return EMBEDDED_API_CATALOG;
		}

		const raw = await readApiCatalogFile(this.plugin.app.vault.adapter, overridePath);
		return parseCatalogNodes(raw);
	}

	async getApiFunctionTree(forceReload = false): Promise<YunxiaoApiFunctionGroup> {
		if (!this.apiFunctionTreePromise || forceReload) {
			this.apiFunctionTreePromise = this.createApiFunctionTree();
		}

		return await this.apiFunctionTreePromise;
	}

	async getAllApiFunctions(forceReload = false): Promise<YunxiaoApiFunction[]> {
		const tree = await this.getApiFunctionTree(forceReload);
		return flattenApiFunctions(tree);
	}

	async fetchApiDocumentDetail(node: YunxiaoApiCatalogNode): Promise<YunxiaoApiDocumentDetail> {
		if (!node.alias) {
			throw new Error("接口节点缺少 alias，无法请求接口文档。");
		}

		const params = new URLSearchParams({
			alias: node.alias,
			pageNum: "1",
			pageSize: "20",
			website: "cn",
			language: "zh",
			channel: "",
		});
		const requestUrlString = `${this.plugin.settings.apiDocDetailEndpoint}?${params.toString()}`;
		const response = await requestUrl({
			url: requestUrlString,
			method: "GET",
			headers: buildDocHeaders(this.plugin.settings.apiDocHeadersJson, this.plugin.settings.apiDocCookie, node.url),
		});

		if (response.status >= 400) {
			throw new Error(`接口文档请求失败 (${response.status}): ${response.text}`);
		}

		return {
			alias: node.alias,
			catalogNode: node,
			fetchedAt: new Date().toISOString(),
			requestUrl: requestUrlString,
			response: response.json ?? response.text,
		};
	}

	async syncAllApiDocuments(overwrite = true): Promise<{ failed: number; saved: number; skipped: number }> {
		const catalog = await this.getApiCatalogNodes();
		const outputRoot = normalizePath(this.plugin.settings.apiDocsOutputDir);
		const counters = { failed: 0, saved: 0, skipped: 0 };

		await ensureFolder(this.plugin.app.vault.adapter, outputRoot);

		for (const node of catalog) {
			await this.syncCatalogNode(node, outputRoot, overwrite, counters, []);
		}

		return counters;
	}

	private async createApiFunctionTree(): Promise<YunxiaoApiFunctionGroup> {
		const catalog = await this.getApiCatalogNodes();
		return buildApiFunctionTree(catalog, async (node) => await this.fetchApiDocumentDetail(node));
	}

	private async syncCatalogNode(
		node: YunxiaoApiCatalogNode,
		outputRoot: string,
		overwrite: boolean,
		counters: { failed: number; saved: number; skipped: number },
		pathSegments: string[],
	): Promise<void> {
		const currentFolder = normalizePath(`${outputRoot}/${[...pathSegments, slugifyCatalogNode(node)].join("/")}`);
		await ensureFolder(this.plugin.app.vault.adapter, currentFolder);
		await this.plugin.app.vault.adapter.write(normalizePath(`${currentFolder}/_meta.json`), JSON.stringify(node, null, 2));

		if (node.validDocument && node.alias) {
			const targetFile = normalizePath(`${currentFolder}/document.json`);
			if (!overwrite && await this.plugin.app.vault.adapter.exists(targetFile)) {
				counters.skipped += 1;
			} else {
				try {
					const detail = await this.fetchApiDocumentDetail(node);
					await this.plugin.app.vault.adapter.write(targetFile, JSON.stringify(detail, null, 2));
					counters.saved += 1;
				} catch (error) {
					counters.failed += 1;
					const message = error instanceof Error ? error.message : String(error);
					await this.plugin.app.vault.adapter.write(
						normalizePath(`${currentFolder}/error.json`),
						JSON.stringify({ alias: node.alias, error: message, at: new Date().toISOString() }, null, 2),
					);
				}
			}
		}

		for (const child of node.children ?? []) {
			await this.syncCatalogNode(child, outputRoot, overwrite, counters, [...pathSegments, slugifyCatalogNode(node)]);
		}
	}
}

function buildDocHeaders(rawHeadersJson: string, cookie: string, url?: string): Record<string, string> {
	const headers: Record<string, string> = {
		accept: "application/json, text/plain, */*",
		referer: url ? `https://help.aliyun.com${url}` : "https://help.aliyun.com/",
	};

	if (rawHeadersJson.trim()) {
		try {
			const parsed = JSON.parse(rawHeadersJson) as Record<string, unknown>;
			for (const [key, value] of Object.entries(parsed)) {
				headers[key] = String(value);
			}
		} catch (error) {
			console.error("Failed to parse apiDocHeadersJson", error);
		}
	}

	if (cookie.trim()) {
		headers.Cookie = cookie.trim();
	}

	return headers;
}

async function ensureFolder(adapter: DataAdapter, folderPath: string): Promise<void> {
	const segments = normalizePath(folderPath).split("/").filter(Boolean);
	let current = "";

	for (const segment of segments) {
		current = current ? `${current}/${segment}` : segment;
		if (!await adapter.exists(current)) {
			await adapter.mkdir(current);
		}
	}
}

function extractList<T>(response: JsonObject): T[] {
	const candidateKeys = ["items", "data", "records", "workitems"];
	for (const key of candidateKeys) {
		const value = response[key];
		if (Array.isArray(value)) {
			return value as T[];
		}
	}
	return [];
}

function extractTotal(response: JsonObject): number | undefined {
	const candidateKeys = ["total", "count", "totalCount"];
	for (const key of candidateKeys) {
		const value = response[key];
		if (typeof value === "number") {
			return value;
		}
	}
	return undefined;
}

function slugifyCatalogNode(node: YunxiaoApiCatalogNode): string {
	const fromAlias = node.alias?.split("/").filter(Boolean).pop();
	const fromTitle = node.title?.split(" - ")[0]?.trim();
	const source = fromAlias || fromTitle || `node-${node.id ?? "unknown"}`;

	return source
		.replace(/[\\/:*?"<>|]/g, "-")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "") || "unnamed";
}
