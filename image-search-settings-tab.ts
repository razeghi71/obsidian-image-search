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

		new Setting(containerEl)
			.setName('API key')
			.setDesc('Brave Search API key (get one at https://brave.com/search/api/)')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.apiKey)
				.onChange(async (value) => {
					this.plugin.settings.apiKey = value;
					await this.plugin.saveSettings();
				}));
	}
}
