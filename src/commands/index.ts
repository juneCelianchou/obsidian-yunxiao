import { MarkdownView, Notice } from "obsidian";
import type YunxiaoPlugin from "../main";
import type { TeamMember } from "../settings";
import type { YunxiaoWorkitem } from "../types";
import { requestTeamMember } from "../ui/member-picker-modal";
import { requestText } from "../ui/input-modal";
import { parseTemplateJson, todayDateString } from "../utils/template";

export function registerCommands(plugin: YunxiaoPlugin): void {
	plugin.addCommand({
		id: "yunxiao-test-connection",
		name: "云效：测试连接",
		callback: async () => {
			await runSafely(async () => {
				const user = await plugin.client.getUserByToken();
				const displayName = user.name ?? user.nickName ?? user.userId ?? user.id ?? "unknown";
				new Notice(`云效连接成功，当前用户：${displayName}`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-sync-workitems-to-note",
		name: "云效：同步成员工作项到当前笔记",
		callback: async () => {
			await runSafely(async () => {
				const assignee = await resolveAssignee(plugin);
				if (!assignee) {
					return;
				}
				const payload = parseTemplateJson(plugin.settings.searchPayloadTemplate, {
					projectId: plugin.settings.defaultProjectId,
					assignee: assignee.userId,
					today: todayDateString(),
				});
				const result = await plugin.client.searchWorkitems(payload);
				const markdown = buildWorkitemListMarkdown(result.items, `${assignee.name} 的云效工作项`);
				appendToActiveNote(plugin, markdown);
				new Notice(`已写入 ${result.items.length} 条工作项到当前笔记`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-update-workitem-status",
		name: "云效：更新工作项状态",
		callback: async () => {
			await runSafely(async () => {
				const workitemId = await requestText(plugin.app, "输入工作项 ID", "例如：123456");
				if (!workitemId) {
					return;
				}
				const status = await requestText(plugin.app, "输入目标状态", "例如：进行中");
				if (!status) {
					return;
				}
				const payload = parseTemplateJson(plugin.settings.updateStatusPayloadTemplate, { status });
				await plugin.client.updateWorkitem(workitemId, payload);
				new Notice(`工作项 ${workitemId} 已更新为状态：${status}`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-log-effort",
		name: "云效：登记工时",
		callback: async () => {
			await runSafely(async () => {
				const workitemId = await requestText(plugin.app, "输入工作项 ID", "例如：123456");
				if (!workitemId) {
					return;
				}
				const hoursText = await requestText(plugin.app, "输入工时（小时）", "例如：2.5");
				if (!hoursText) {
					return;
				}
				const hours = Number(hoursText);
				if (!Number.isFinite(hours) || hours <= 0) {
					throw new Error("工时必须是大于 0 的数字。");
				}
				const description = await requestText(plugin.app, "输入工时说明", "例如：修复需求评审问题");
				if (description === null) {
					return;
				}
				const spentAt = await requestText(plugin.app, "输入日期", "YYYY-MM-DD", todayDateString());
				if (!spentAt) {
					return;
				}
				const minutes = String(Math.round(hours * 60));
				const payload = parseTemplateJson(plugin.settings.createEffortPayloadTemplate, {
					description,
					minutes,
					spentAt,
				});
				await plugin.client.createEffortRecord(workitemId, payload);
				new Notice(`已登记 ${hours} 小时工时到工作项 ${workitemId}`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-generate-daily-report",
		name: "云效：生成日报草稿",
		callback: async () => {
			await runSafely(async () => {
				const assignee = await resolveAssignee(plugin);
				if (!assignee) {
					return;
				}
				const payload = parseTemplateJson(plugin.settings.searchPayloadTemplate, {
					projectId: plugin.settings.defaultProjectId,
					assignee: assignee.userId,
					today: todayDateString(),
				});
				const result = await plugin.client.searchWorkitems(payload);
				const markdown = buildDailyReportMarkdown(result.items, assignee.name);
				appendToActiveNote(plugin, markdown);
				new Notice(`已生成 ${assignee.name} 的日报草稿到当前笔记`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-sync-all-api-docs",
		name: "云效：同步全部接口文档",
		callback: async () => {
			await runSafely(async () => {
				const result = await plugin.client.syncAllApiDocuments(true);
				new Notice(`接口文档同步完成：保存 ${result.saved} 个，跳过 ${result.skipped} 个，失败 ${result.failed} 个`);
			});
		},
	});

	plugin.addCommand({
		id: "yunxiao-list-api-functions",
		name: "云效：显示已封装接口数量",
		callback: async () => {
			await runSafely(async () => {
				const functions = await plugin.client.getAllApiFunctions(true);
				new Notice(`已根据目录封装 ${functions.length} 个接口函数`);
			});
		},
	});
}

async function runSafely(task: () => Promise<void>): Promise<void> {
	try {
		await task();
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		new Notice(`云效操作失败：${message}`);
	}
}

function appendToActiveNote(plugin: YunxiaoPlugin, markdown: string): void {
	const view = plugin.app.workspace.getActiveViewOfType(MarkdownView);
	if (!view) {
		throw new Error("请先打开一个 Markdown 笔记后再执行命令。");
	}
	const editor = view.editor;
	const lastLine = editor.lastLine();
	const lastCh = editor.getLine(lastLine).length;
	editor.replaceRange(`\n\n${markdown}\n`, { line: lastLine, ch: lastCh });
}

function buildWorkitemListMarkdown(items: YunxiaoWorkitem[], title: string): string {
	const lines = [`## ${title}`, "", `- 生成时间：${new Date().toLocaleString()}`, `- 数量：${items.length}`, ""];
	if (items.length === 0) {
		lines.push("- 暂无工作项");
		return lines.join("\n");
	}
	for (const item of items) {
		const id = workitemId(item);
		const subject = workitemTitle(item);
		const status = workitemStatus(item);
		const assignee = workitemAssignee(item);
		lines.push(`- [ ] ${subject}（ID: ${id}，状态: ${status}，负责人: ${assignee}）`);
	}
	return lines.join("\n");
}

function buildDailyReportMarkdown(items: YunxiaoWorkitem[], ownerName: string): string {
	const statusMap = new Map<string, number>();
	for (const item of items) {
		const status = workitemStatus(item);
		statusMap.set(status, (statusMap.get(status) ?? 0) + 1);
	}
	const lines = [`## 云效日报 ${todayDateString()}`, "", `- 成员：${ownerName}`, "", "### 工作项概览", `- 总数：${items.length}`];
	for (const [status, count] of statusMap.entries()) {
		lines.push(`- ${status}：${count}`);
	}
	lines.push("", "### 任务清单");
	for (const item of items) {
		lines.push(`- ${workitemTitle(item)}（${workitemId(item)}，${workitemStatus(item)}）`);
	}
	lines.push("", "### 今日产出", "- 已完成：", "- 进行中：", "- 风险与阻塞：");
	return lines.join("\n");
}

async function resolveAssignee(plugin: YunxiaoPlugin): Promise<{ name: string; userId: string } | null> {
	const members = buildMemberOptions(plugin);
	if (members.length > 0) {
		return await requestTeamMember(plugin.app, members);
	}
	const assignee = await requestText(plugin.app, "输入负责人 userId", "例如：user-123", plugin.settings.defaultAssignee);
	if (!assignee) {
		return null;
	}
	return { name: assignee, userId: assignee };
}

function buildMemberOptions(plugin: YunxiaoPlugin): TeamMember[] {
	const options: TeamMember[] = [];
	for (const member of plugin.settings.teamMembers) {
		if (!member || !member.userId || member.userId.trim().length === 0) {
			continue;
		}
		options.push({
			name: member.name?.trim() || member.userId.trim(),
			userId: member.userId.trim(),
		});
	}
	const defaultAssignee = plugin.settings.defaultAssignee.trim();
	if (defaultAssignee.length > 0 && !options.some((member) => member.userId === defaultAssignee)) {
		options.unshift({
			name: "默认负责人",
			userId: defaultAssignee,
		});
	}
	return options;
}

function workitemId(item: YunxiaoWorkitem): string {
	if (typeof item.identifier === "string" && item.identifier.length > 0) {
		return item.identifier;
	}
	if (typeof item.id === "string" && item.id.length > 0) {
		return item.id;
	}
	return "unknown";
}

function workitemTitle(item: YunxiaoWorkitem): string {
	if (typeof item.subject === "string" && item.subject.length > 0) {
		return item.subject;
	}
	if (typeof item.title === "string" && item.title.length > 0) {
		return item.title;
	}
	return "未命名工作项";
}

function workitemStatus(item: YunxiaoWorkitem): string {
	if (typeof item.status === "string") {
		return item.status;
	}
	if (item.status && typeof item.status === "object" && "name" in item.status && typeof item.status.name === "string") {
		return item.status.name;
	}
	return "unknown";
}

function workitemAssignee(item: YunxiaoWorkitem): string {
	if (typeof item.assignedTo === "string") {
		return item.assignedTo;
	}
	if (item.assignedTo && typeof item.assignedTo === "object" && "name" in item.assignedTo && typeof item.assignedTo.name === "string") {
		return item.assignedTo.name;
	}
	return "-";
}
