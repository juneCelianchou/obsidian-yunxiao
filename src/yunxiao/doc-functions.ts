import { normalizePath, type DataAdapter } from "obsidian";
import type {
	YunxiaoApiCatalogNode,
	YunxiaoApiDocumentDetail,
	YunxiaoApiFunction,
	YunxiaoApiFunctionGroup,
	YunxiaoApiFunctionNode,
} from "../types";

const BROKEN_TITLE_PATTERN = /("title"\s*:\s*"[^"\r\n]*?)(,)(\r?\n)/g;

export async function readApiCatalogFile(adapter: DataAdapter, filePath: string): Promise<string> {
	return await adapter.read(normalizePath(filePath));
}

export function parseCatalogNodes(rawCatalog: string): YunxiaoApiCatalogNode[] {
	const normalized = rawCatalog
		.replace(/^\uFEFF/, "")
		.replace(BROKEN_TITLE_PATTERN, "$1\"$2$3");
	const parsed = JSON.parse(normalized) as unknown;

	if (!Array.isArray(parsed)) {
		throw new Error("接口目录文件格式错误，根节点不是数组。");
	}

	return parsed as YunxiaoApiCatalogNode[];
}

export function buildApiFunctionTree(
	catalog: YunxiaoApiCatalogNode[],
	fetcher: (node: YunxiaoApiCatalogNode) => Promise<YunxiaoApiDocumentDetail>,
): YunxiaoApiFunctionGroup {
	return {
		kind: "group",
		id: "root",
		title: "云效接口目录",
		children: buildChildren(catalog, fetcher),
	};
}

export function flattenApiFunctions(root: YunxiaoApiFunctionGroup): YunxiaoApiFunction[] {
	const result: YunxiaoApiFunction[] = [];
	visitNode(root, result);
	return result;
}

function buildChildren(
	nodes: YunxiaoApiCatalogNode[],
	fetcher: (node: YunxiaoApiCatalogNode) => Promise<YunxiaoApiDocumentDetail>,
): Record<string, YunxiaoApiFunctionNode> {
	const result: Record<string, YunxiaoApiFunctionNode> = {};

	for (const node of nodes) {
		const key = toFunctionKey(node);
		const title = node.title?.trim() || node.alias || key;

		if (node.validDocument && node.alias) {
			result[key] = {
				kind: "leaf",
				function: {
					alias: node.alias,
					fetch: () => fetcher(node),
					id: key,
					title,
					url: node.url,
				},
			};
			continue;
		}

		if (node.children?.length) {
			result[key] = {
				kind: "group",
				id: key,
				title,
				children: buildChildren(node.children, fetcher),
			};
		}
	}

	return result;
}

function visitNode(node: YunxiaoApiFunctionNode, result: YunxiaoApiFunction[]): void {
	if (node.kind === "leaf") {
		result.push(node.function);
		return;
	}

	for (const child of Object.values(node.children)) {
		visitNode(child, result);
	}
}

function toFunctionKey(node: YunxiaoApiCatalogNode): string {
	const aliasPart = node.alias?.split("/").filter(Boolean).pop();
	const raw = aliasPart || node.title || `node-${node.id ?? "unknown"}`;
	return raw
		.replace(/[^A-Za-z0-9]+(.)/g, (_, char: string) => char.toUpperCase())
		.replace(/[^A-Za-z0-9]/g, "")
		.replace(/^[A-Z]/, (char) => char.toLowerCase()) || "unnamed";
}
