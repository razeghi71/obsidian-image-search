import { App, PluginSettingTab, Setting } from 'obsidian';
import ImageSearchPlugin from './main'

export interface ImageSearchPluginSettings {
	apiKey: string;
	searchEngineId: string;
}

export const DEFAULT_SETTINGS: ImageSearchPluginSettings = {
	apiKey: '',
	searchEngineId: ''
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
			.setName('API KEY')
			.setDesc('Google Programmable Search Engine API KEY')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.apiKey)
				.onChange(async (value) => {
					this.plugin.settings.apiKey = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Search engine ID')
			.setDesc('Google Programmable Search Engine ID')
			.addText(text => text
				.setPlaceholder('')
				.setValue(this.plugin.settings.searchEngineId)
				.onChange(async (value) => {
					this.plugin.settings.searchEngineId = value;
					await this.plugin.saveSettings();
				}));
	}
}
