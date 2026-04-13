import { Plugin } from "obsidian";
import { YunxiaoClient } from "./yunxiao/client";
import { registerCommands } from "./commands";
import { DEFAULT_SETTINGS, type TeamMember, type YunxiaoPluginSettings, YunxiaoSettingTab } from "./settings";

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
		};
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}
}

function normalizeTeamMembers(input: unknown): TeamMember[] {
	if (!Array.isArray(input)) {
		return [];
	}
	const members: TeamMember[] = [];
	for (const item of input) {
		if (!item || typeof item !== "object") {
			continue;
		}
		const name = "name" in item && typeof item.name === "string" ? item.name : "";
		const userId = "userId" in item && typeof item.userId === "string" ? item.userId : "";
		members.push({ name, userId });
	}
	return members;
}
