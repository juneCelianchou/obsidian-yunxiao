export function applyTemplate(rawTemplate: string, vars: Record<string, string>): string {
	let result = rawTemplate;
	for (const [key, value] of Object.entries(vars)) {
		const token = `\${${key}}`;
		result = result.split(token).join(value);
	}
	return result;
}

export function parseTemplateJson(rawTemplate: string, vars: Record<string, string>): Record<string, unknown> {
	const rendered = applyTemplate(rawTemplate, vars);
	const payload = JSON.parse(rendered) as Record<string, unknown>;
	if (!payload || Array.isArray(payload)) {
		throw new Error("模板 JSON 必须是对象。");
	}
	return payload;
}

export function todayDateString(): string {
	const now = new Date();
	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const day = String(now.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}
