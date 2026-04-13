import { App, PluginSettingTab, Setting } from "obsidian";
import YunxiaoPlugin from "./main";

export interface TeamMember {
	name: string;
	userId: string;
}

export interface YunxiaoPluginSettings {
	domain: string;
	organizationId: string;
	token: string;
	defaultProjectId: string;
	defaultAssignee: string;
	teamMembers: TeamMember[];
	searchPayloadTemplate: string;
	updateStatusPayloadTemplate: string;
	createEffortPayloadTemplate: string;
}

export const DEFAULT_SETTINGS: YunxiaoPluginSettings = {
	domain: "https://openapi-rdc.aliyuncs.com",
	organizationId: "",
	token: "",
	defaultProjectId: "",
	defaultAssignee: "",
	teamMembers: [],
	searchPayloadTemplate: JSON.stringify(
		{
			page: 1,
			perPage: 20,
			projectId: "${projectId}",
			assignedTo: "${assignee}",
		},
		null,
		2,
	),
	updateStatusPayloadTemplate: JSON.stringify(
		{
			status: "${status}",
		},
		null,
		2,
	),
	createEffortPayloadTemplate: JSON.stringify(
		{
			description: "${description}",
			timeSpent: "${minutes}",
			spentAt: "${spentAt}",
		},
		null,
		2,
	),
};

export class YunxiaoSettingTab extends PluginSettingTab {
	plugin: YunxiaoPlugin;

	constructor(app: App, plugin: YunxiaoPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName("Service domain")
			.setDesc("例如: https://openapi-rdc.aliyuncs.com")
			.addText((text) =>
				text
					.setPlaceholder("https://openapi-rdc.aliyuncs.com")
					.setValue(this.plugin.settings.domain)
					.onChange(async (value) => {
						this.plugin.settings.domain = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Organization ID")
			.setDesc("中心版通常需要配置 organizationId。")
			.addText((text) =>
				text
					.setPlaceholder("your-organization-id")
					.setValue(this.plugin.settings.organizationId)
					.onChange(async (value) => {
						this.plugin.settings.organizationId = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Personal access token")
			.setDesc("云效个人访问令牌，会作为 x-yunxiao-token 请求头发送。")
			.addText((text) => {
				text.inputEl.type = "password";
				text
					.setPlaceholder("pt-xxxx")
					.setValue(this.plugin.settings.token)
					.onChange(async (value) => {
						this.plugin.settings.token = value.trim();
						await this.plugin.saveSettings();
					});
			});

		new Setting(containerEl)
			.setName("Default project ID")
			.setDesc("查询工作项时用于模板变量 ${projectId}。")
			.addText((text) =>
				text
					.setPlaceholder("project-id")
					.setValue(this.plugin.settings.defaultProjectId)
					.onChange(async (value) => {
						this.plugin.settings.defaultProjectId = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Default assignee")
			.setDesc("查询工作项时用于模板变量 ${assignee}。可设置为你自己或一个默认成员的 user_id。")
			.addText((text) =>
				text
					.setPlaceholder("user-id")
					.setValue(this.plugin.settings.defaultAssignee)
					.onChange(async (value) => {
						this.plugin.settings.defaultAssignee = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		containerEl.createEl("h3", { text: "团队成员管理" });
		containerEl.createEl("p", {
			text: "用于管理成员任务时快速选择负责人。格式为：姓名 + user_id。",
		});

		this.plugin.settings.teamMembers.forEach((member, index) => {
			new Setting(containerEl)
				.setName(`成员 ${index + 1}`)
				.addText((text) =>
					text
						.setPlaceholder("姓名")
						.setValue(member.name)
						.onChange(async (value) => {
							const target = this.plugin.settings.teamMembers[index];
							if (!target) {
								return;
							}
							target.name = value.trim();
							await this.plugin.saveSettings();
						}),
				)
				.addText((text) =>
					text
						.setPlaceholder("user_id")
						.setValue(member.userId)
						.onChange(async (value) => {
							const target = this.plugin.settings.teamMembers[index];
							if (!target) {
								return;
							}
							target.userId = value.trim();
							await this.plugin.saveSettings();
						}),
				)
				.addExtraButton((button) =>
					button
						.setIcon("trash")
						.setTooltip("删除成员")
						.onClick(async () => {
							this.plugin.settings.teamMembers.splice(index, 1);
							await this.plugin.saveSettings();
							this.display();
						}),
				);
		});

		new Setting(containerEl)
			.setName("新增团队成员")
			.setDesc("点击后新增一行成员配置。")
			.addButton((button) =>
				button
					.setButtonText("添加成员")
					.onClick(async () => {
						this.plugin.settings.teamMembers.push({ name: "", userId: "" });
						await this.plugin.saveSettings();
						this.display();
					}),
			);

		new Setting(containerEl)
			.setName("Search payload template (JSON)")
			.setDesc("用于 SearchWorkitems 请求体，可使用 ${projectId}、${assignee}、${today}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.searchPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.searchPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Update status payload template (JSON)")
			.setDesc("用于 UpdateWorkitem 请求体，可使用 ${status}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.updateStatusPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.updateStatusPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("Create effort payload template (JSON)")
			.setDesc("用于 CreateEffortRecord 请求体，可使用 ${description}、${minutes}、${spentAt}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.createEffortPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.createEffortPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);
	}
}
