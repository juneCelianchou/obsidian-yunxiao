import { normalizePath, type DataAdapter } from "obsidian";
import type { TeamMember } from "../settings";

export async function loadTeamMembersFromFile(adapter: DataAdapter, filePath: string): Promise<TeamMember[]> {
	const normalizedPath = normalizePath(filePath.trim());
	if (!normalizedPath) {
		throw new Error("Team members file path is empty.");
	}
	if (!await adapter.exists(normalizedPath)) {
		throw new Error(`Team members file not found: ${normalizedPath}`);
	}

	const raw = await adapter.read(normalizedPath);
	return parseTeamMembers(raw);
}

export function normalizeTeamMembers(input: unknown): TeamMember[] {
	if (!Array.isArray(input)) {
		return [];
	}

	const members: TeamMember[] = [];
	for (const item of input) {
		const normalized = normalizeMember(item);
		if (normalized) {
			members.push(normalized);
		}
	}

	return dedupeMembers(members);
}

function parseTeamMembers(raw: string): TeamMember[] {
	const content = raw.replace(/^\uFEFF/, "").trim();
	if (!content) {
		return [];
	}

	const parsedByJson = tryParseMembersByJson(content);
	if (parsedByJson) {
		return parsedByJson;
	}

	const parsedByLines = parseMembersByLines(content);
	if (parsedByLines.length > 0) {
		return parsedByLines;
	}

	throw new Error("Unsupported team members file format.");
}

function tryParseMembersByJson(content: string): TeamMember[] | null {
	try {
		const parsed = JSON.parse(content) as unknown;
		if (Array.isArray(parsed)) {
			return normalizeTeamMembers(parsed);
		}
		if (parsed && typeof parsed === "object") {
			const members = getObjectMembersField(parsed);
			if (members) {
				return normalizeTeamMembers(members);
			}
		}
		return null;
	} catch {
		return null;
	}
}

function getObjectMembersField(input: object): unknown[] | null {
	const objectLike = input as Record<string, unknown>;
	if (Array.isArray(objectLike.teamMembers)) {
		return objectLike.teamMembers;
	}
	if (Array.isArray(objectLike.members)) {
		return objectLike.members;
	}
	return null;
}

function parseMembersByLines(content: string): TeamMember[] {
	const members: TeamMember[] = [];
	const lines = content.split(/\r?\n/);

	for (const rawLine of lines) {
		const line = rawLine.trim();
		if (!line || line.startsWith("#") || line.startsWith("//")) {
			continue;
		}

		const parts = splitLine(line);
		if (parts.length === 1) {
			const userId = (parts[0] ?? "").trim();
			if (userId.length > 0) {
				members.push({ name: userId, userId });
			}
			continue;
		}

		const name = (parts[0] ?? "").trim();
		const userId = (parts[1] ?? "").trim();
		if (userId.length === 0) {
			continue;
		}
		members.push({
			name: name || userId,
			userId,
		});
	}

	return dedupeMembers(members);
}

function splitLine(line: string): string[] {
	if (line.includes("\t")) {
		return line.split("\t", 2);
	}
	if (line.includes(",")) {
		return line.split(",", 2);
	}
	if (line.includes("|")) {
		return line.split("|", 2);
	}
	return [line];
}

function normalizeMember(input: unknown): TeamMember | null {
	if (!input || typeof input !== "object") {
		return null;
	}

	const objectLike = input as Record<string, unknown>;
	let name = "";
	let userId = "";
	if (typeof objectLike.name === "string") {
		name = objectLike.name.trim();
	}
	if (typeof objectLike.userId === "string") {
		userId = objectLike.userId.trim();
	}
	if (!userId && typeof objectLike.id === "string") {
		userId = objectLike.id.trim();
	}
	if (!userId) {
		return null;
	}

	return {
		name: name || userId,
		userId,
	};
}

function dedupeMembers(members: TeamMember[]): TeamMember[] {
	const seen = new Set<string>();
	const result: TeamMember[] = [];

	for (const member of members) {
		if (seen.has(member.userId)) {
			continue;
		}
		seen.add(member.userId);
		result.push(member);
	}

	return result;
}
