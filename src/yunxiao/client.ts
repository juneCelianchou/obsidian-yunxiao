import { requestUrl } from "obsidian";
import type YunxiaoPlugin from "../main";
import type { SearchResult, YunxiaoUser, YunxiaoWorkitem } from "../types";

interface JsonObject {
	[key: string]: unknown;
}

export class YunxiaoClient {
	private plugin: YunxiaoPlugin;

	constructor(plugin: YunxiaoPlugin) {
		this.plugin = plugin;
	}

	private get baseDomain(): string {
		const raw = this.plugin.settings.domain.trim();
		if (!raw) {
			throw new Error("请先在插件设置中配置云效域名。");
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

	private get organizationId(): string {
		const organizationId = this.plugin.settings.organizationId.trim();
		if (!organizationId) {
			throw new Error("请先在插件设置中配置 organizationId。");
		}
		return organizationId;
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
		const path = `/oapi/v1/projex/organizations/${this.organizationId}/workitems/search`;
		const response = await this.request<JsonObject>("POST", path, payload);
		const items = extractList<YunxiaoWorkitem>(response);
		const total = extractTotal(response);
		return { items, total };
	}

	async getWorkitem(workitemId: string): Promise<YunxiaoWorkitem> {
		const path = `/oapi/v1/projex/organizations/${this.organizationId}/workitems/${encodeURIComponent(workitemId)}`;
		return await this.request<YunxiaoWorkitem>("GET", path);
	}

	async updateWorkitem(workitemId: string, payload: JsonObject): Promise<void> {
		const path = `/oapi/v1/projex/organizations/${this.organizationId}/workitems/${encodeURIComponent(workitemId)}`;
		await this.request<JsonObject>("PUT", path, payload);
	}

	async createEffortRecord(workitemId: string, payload: JsonObject): Promise<void> {
		const path = `/oapi/v1/projex/organizations/${this.organizationId}/workitems/${encodeURIComponent(workitemId)}/effortRecords`;
		await this.request<JsonObject>("POST", path, payload);
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
