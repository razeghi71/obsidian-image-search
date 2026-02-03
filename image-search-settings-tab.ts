import { App, PluginSettingTab, Setting } from 'obsidian';
import ImageSearchPlugin from './main'

export interface ImageSearchPluginSettings {
	apiKey: string;
}

export const DEFAULT_SETTINGS: ImageSearchPluginSettings = {
	apiKey: ''
}

export class ImageSearchSettingTab extends PluginSettingTab {
	plugin: ImageSearchPlugin;

	constructor(app: App, plugin: ImageSearchPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}


	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		const apiKeyDesc = document.createDocumentFragment();
		apiKeyDesc.append(
			'Brave Search API key. ',
			apiKeyDesc.createEl('a', {
				text: 'Learn how to get an API key',
				href: 'https://github.com/razeghi71/obsidian-image-search#how-to-get-a-brave-search-api-key'
			})
		);

		new Setting(containerEl)
			.setName('API key')
			.setDesc(apiKeyDesc)
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.apiKey)
				.onChange(async (value) => {
					this.plugin.settings.apiKey = value;
					await this.plugin.saveSettings();
				}));
	}
}
