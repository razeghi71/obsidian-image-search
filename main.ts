import { Editor, Plugin } from 'obsidian';
import { ImageSearchPluginSettings, ImageSearchSettingTab, DEFAULT_SETTINGS } from 'image-search-settings-tab';
import { QueryModal } from 'query-modal';

export default class ImageSearchPlugin extends Plugin {
	settings: ImageSearchPluginSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'insert-image',
			name: 'Insert image',
			editorCallback: (editor: Editor) => {
				new QueryModal(this.app, this.settings, this.onSubmit(editor)).open();
			}
		});

		this.addSettingTab(new ImageSearchSettingTab(this.app, this));
	}

	onSubmit =  (editor: Editor) => (image: string) => {
		editor.replaceSelection(`![](${image})`);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}