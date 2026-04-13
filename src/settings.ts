import { App, Notice, PluginSettingTab, Setting, normalizePath } from "obsidian";
import YunxiaoPlugin from "./main";
import { loadTeamMembersFromFile } from "./utils/team-members";

export interface TeamMember {
	name: string;
	userId: string;
}

export interface YunxiaoPluginSettings {
	domain: string;
	token: string;
	defaultProjectId: string;
	defaultAssignee: string;
	teamMembers: TeamMember[];
	teamMembersFilePath: string;
	searchPayloadTemplate: string;
	updateStatusPayloadTemplate: string;
	createEffortPayloadTemplate: string;
	apiCatalogPath: string;
	apiDocsOutputDir: string;
	apiDocDetailEndpoint: string;
	apiDocCookie: string;
	apiDocHeadersJson: string;
}

export const DEFAULT_SETTINGS: YunxiaoPluginSettings = {
	domain: "https://test-cn-shenzhen.devops.aliyuncs.com/",
	token: "",
	defaultProjectId: "",
	defaultAssignee: "",
	teamMembers: [],
	teamMembersFilePath: "",
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
	apiCatalogPath: "",
	apiDocsOutputDir: normalizePath("yunxiao-api-docs"),
	apiDocDetailEndpoint: "https://help.aliyun.com/help/json/document_detail.json",
	apiDocCookie: "",
	apiDocHeadersJson: JSON.stringify(
		{
			accept: "application/json, text/plain, */*",
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
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

		containerEl.createEl("h2", { text: "云效插件设置" });

		new Setting(containerEl)
			.setName("服务域名")
			.setDesc("例如：https://test-cn-shenzhen.devops.aliyuncs.com/")
			.addText((text) =>
				text
					.setPlaceholder("https://test-cn-shenzhen.devops.aliyuncs.com/")
					.setValue(this.plugin.settings.domain)
					.onChange(async (value) => {
						this.plugin.settings.domain = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("个人访问令牌")
			.setDesc("作为 x-yunxiao-token 请求头发送。")
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
			.setName("默认项目 ID")
			.setDesc("用于工作项搜索模板变量 ${projectId}。")
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
			.setName("默认负责人")
			.setDesc("用于工作项搜索模板变量 ${assignee}。")
			.addText((text) =>
				text
					.setPlaceholder("user-id")
					.setValue(this.plugin.settings.defaultAssignee)
					.onChange(async (value) => {
						this.plugin.settings.defaultAssignee = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		containerEl.createEl("h3", { text: "团队成员" });
		containerEl.createEl("p", {
			text: "维护姓名和 userId，便于命令中快速选择负责人。",
		});

		new Setting(containerEl)
			.setName("Team members file")
			.setDesc("Path in vault. Supports JSON list and text lines: name,userId")
			.addText((text) =>
				text
					.setPlaceholder("team-members.json")
					.setValue(this.plugin.settings.teamMembersFilePath)
					.onChange(async (value) => {
						const trimmed = value.trim();
						this.plugin.settings.teamMembersFilePath = trimmed ? normalizePath(trimmed) : "";
						await this.plugin.saveSettings();
					}),
			)
			.addButton((button) =>
				button
					.setButtonText("Load file")
					.onClick(async () => {
						try {
							const members = await loadTeamMembersFromFile(
								this.plugin.app.vault.adapter,
								this.plugin.settings.teamMembersFilePath,
							);
							this.plugin.settings.teamMembers = members;
							await this.plugin.saveSettings();
							new Notice(`Loaded ${members.length} team members`);
							this.display();
						} catch (error) {
							const message = error instanceof Error ? error.message : String(error);
							new Notice(`Failed to load team members: ${message}`);
						}
					}),
			);

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
						.setPlaceholder("userId")
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
			.setName("新增成员")
			.setDesc("添加一行新的团队成员配置。")
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
			.setName("搜索工作项模板")
			.setDesc("用于搜索工作项，请使用合法 JSON。支持 ${projectId}、${assignee}、${today}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.searchPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.searchPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("更新状态模板")
			.setDesc("用于更新工作项状态。支持 ${status}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.updateStatusPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.updateStatusPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("登记工时模板")
			.setDesc("用于创建工时记录。支持 ${description}、${minutes}、${spentAt}。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.createEffortPayloadTemplate)
					.onChange(async (value) => {
						this.plugin.settings.createEffortPayloadTemplate = value;
						await this.plugin.saveSettings();
					}),
			);

		containerEl.createEl("h3", { text: "接口文档" });

		new Setting(containerEl)
			.setName("接口目录文件")
			.setDesc("默认读取插件目录中的 所有接口信息.txt。")
			.addText((text) =>
				text
					.setPlaceholder("所有接口信息.txt")
					.setValue(this.plugin.settings.apiCatalogPath)
					.onChange(async (value) => {
						this.plugin.settings.apiCatalogPath = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("接口文档输出目录")
			.setDesc("批量同步接口文档时的保存目录。")
			.addText((text) =>
				text
					.setPlaceholder(DEFAULT_SETTINGS.apiDocsOutputDir)
					.setValue(this.plugin.settings.apiDocsOutputDir)
					.onChange(async (value) => {
						this.plugin.settings.apiDocsOutputDir = normalizePath(value.trim() || DEFAULT_SETTINGS.apiDocsOutputDir);
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("接口详情地址")
			.setDesc("来自 单个接口样例.txt。")
			.addText((text) =>
				text
					.setPlaceholder(DEFAULT_SETTINGS.apiDocDetailEndpoint)
					.setValue(this.plugin.settings.apiDocDetailEndpoint)
					.onChange(async (value) => {
						this.plugin.settings.apiDocDetailEndpoint = value.trim() || DEFAULT_SETTINGS.apiDocDetailEndpoint;
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("接口文档 Cookie")
			.setDesc("如果访问阿里云帮助文档需要登录态，可以填写 Cookie。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.apiDocCookie)
					.onChange(async (value) => {
						this.plugin.settings.apiDocCookie = value.trim();
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName("接口文档请求头 JSON")
			.setDesc("额外请求头，需为 JSON 对象。")
			.addTextArea((text) =>
				text
					.setValue(this.plugin.settings.apiDocHeadersJson)
					.onChange(async (value) => {
						this.plugin.settings.apiDocHeadersJson = value;
						await this.plugin.saveSettings();
					}),
			);
	}
}
