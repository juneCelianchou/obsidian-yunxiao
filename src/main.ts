import { Plugin } from "obsidian";
import { YunxiaoClient } from "./yunxiao/client";
import { registerCommands } from "./commands";
import { DEFAULT_SETTINGS, type YunxiaoPluginSettings, YunxiaoSettingTab } from "./settings";
import { normalizeTeamMembers } from "./utils/team-members";

export default class YunxiaoPlugin extends Plugin {
	settings: YunxiaoPluginSettings;
	client: YunxiaoClient;

	async onload(): Promise<void> {
		await this.loadSettings();
		this.client = new YunxiaoClient(this);
		this.addSettingTab(new YunxiaoSettingTab(this.app, this));
		registerCommands(this);
	}

	async loadSettings(): Promise<void> {
		const loaded = Object.assign({}, DEFAULT_SETTINGS, await this.loadData() as Partial<YunxiaoPluginSettings>);
		this.settings = {
			...loaded,
			teamMembers: normalizeTeamMembers(loaded.teamMembers),
			teamMembersFilePath: typeof loaded.teamMembersFilePath === "string" ? loaded.teamMembersFilePath : "",
		};
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}
}
