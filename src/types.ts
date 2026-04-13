export interface YunxiaoUser {
	id?: string;
	userId?: string;
	name?: string;
	nickName?: string;
	email?: string;
}

export interface YunxiaoProject {
	id?: string;
	name?: string;
	description?: string;
}

export interface YunxiaoWorkitem {
	id?: string;
	identifier?: string;
	subject?: string;
	title?: string;
	status?: string | { name?: string };
	assignedTo?: string | { id?: string; name?: string };
	priority?: string | { name?: string };
	[genericKey: string]: unknown;
}

export interface SearchResult<T> {
	items: T[];
	total?: number;
}

export interface YunxiaoApiCatalogNode {
	alias?: string;
	children?: YunxiaoApiCatalogNode[];
	id?: number;
	nodeType?: number;
	title?: string;
	url?: string;
	validDocument?: boolean;
}

export interface YunxiaoApiDocumentDetail {
	alias: string;
	catalogNode: YunxiaoApiCatalogNode;
	fetchedAt: string;
	requestUrl: string;
	response: unknown;
}

export interface YunxiaoApiFunction {
	alias: string;
	fetch: () => Promise<YunxiaoApiDocumentDetail>;
	id: string;
	title: string;
	url?: string;
}

export interface YunxiaoApiFunctionGroup {
	kind: "group";
	id: string;
	title: string;
	children: Record<string, YunxiaoApiFunctionNode>;
}

export interface YunxiaoApiFunctionLeaf {
	kind: "leaf";
	function: YunxiaoApiFunction;
}

export type YunxiaoApiFunctionNode = YunxiaoApiFunctionGroup | YunxiaoApiFunctionLeaf;
