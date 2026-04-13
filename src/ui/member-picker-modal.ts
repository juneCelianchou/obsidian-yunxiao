import { App, FuzzySuggestModal } from "obsidian";
import type { TeamMember } from "../settings";

interface MemberChoice {
	name: string;
	userId: string;
}

export class MemberPickerModal extends FuzzySuggestModal<MemberChoice> {
	private choices: MemberChoice[];
	private onSubmit: (choice: MemberChoice | null) => void;
	private handled = false;

	constructor(app: App, choices: MemberChoice[], onSubmit: (choice: MemberChoice | null) => void) {
		super(app);
		this.choices = choices;
		this.onSubmit = onSubmit;
		this.setPlaceholder("选择成员，可按姓名或 userId 搜索");
	}

	getItems(): MemberChoice[] {
		return this.choices;
	}

	getItemText(item: MemberChoice): string {
		return `${item.name} (${item.userId})`;
	}

	onChooseItem(item: MemberChoice): void {
		this.handled = true;
		this.onSubmit(item);
	}

	onClose(): void {
		if (!this.handled) {
			this.onSubmit(null);
		}
		this.contentEl.empty();
	}
}

export function requestTeamMember(app: App, members: TeamMember[]): Promise<MemberChoice | null> {
	return new Promise((resolve) => {
		const validMembers = members
			.filter((member) => member.userId.trim().length > 0)
			.map((member) => ({
				name: member.name.trim() || member.userId.trim(),
				userId: member.userId.trim(),
			}));
		const modal = new MemberPickerModal(app, validMembers, resolve);
		modal.open();
	});
}
