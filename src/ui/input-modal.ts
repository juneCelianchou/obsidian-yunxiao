import { App, Modal, Setting } from "obsidian";

export class TextInputModal extends Modal {
	private title: string;
	private placeholder: string;
	private initialValue: string;
	private onSubmit: (value: string | null) => void;
	private submitted = false;

	constructor(
		app: App,
		title: string,
		placeholder: string,
		initialValue: string,
		onSubmit: (value: string | null) => void,
	) {
		super(app);
		this.title = title;
		this.placeholder = placeholder;
		this.initialValue = initialValue;
		this.onSubmit = onSubmit;
	}

	onOpen(): void {
		const { contentEl } = this;
		contentEl.empty();
		contentEl.createEl("h3", { text: this.title });

		new Setting(contentEl).addText((text) => {
			text
				.setPlaceholder(this.placeholder)
				.setValue(this.initialValue);
			text.inputEl.focus();
			text.inputEl.addEventListener("keydown", (evt) => {
				if (evt.key === "Enter") {
					this.submitted = true;
					this.onSubmit(text.getValue().trim());
					this.close();
				}
			});
		});

		new Setting(contentEl)
			.addButton((button) =>
				button
					.setButtonText("取消")
					.onClick(() => this.close()),
			)
			.addButton((button) =>
				button
					.setCta()
					.setButtonText("确认")
					.onClick(() => {
						const input = contentEl.querySelector("input");
						const value = input instanceof HTMLInputElement ? input.value.trim() : "";
						this.submitted = true;
						this.onSubmit(value);
						this.close();
					}),
			);
	}

	onClose(): void {
		if (!this.submitted) {
			this.onSubmit(null);
		}
		this.contentEl.empty();
	}
}

export function requestText(
	app: App,
	title: string,
	placeholder = "",
	initialValue = "",
): Promise<string | null> {
	return new Promise((resolve) => {
		const modal = new TextInputModal(app, title, placeholder, initialValue, resolve);
		modal.open();
	});
}
