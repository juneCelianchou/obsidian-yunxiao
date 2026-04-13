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
