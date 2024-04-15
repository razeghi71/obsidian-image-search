import { App, Modal, Setting } from "obsidian";
import { ImageSearchPluginSettings } from 'image-search-settings-tab';

export class QueryModal extends Modal {
  private result: string;
  private settings: ImageSearchPluginSettings;
  private imageList: HTMLElement;
  private onSubmit: (result: string) => void;

  constructor(app: App, settings: ImageSearchPluginSettings, onSubmit: (result: string) => void) {
    super(app);
    this.settings = settings;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    this.contentEl.createEl("h1", { text: "What do you want to search for?" });

    new Setting(this.contentEl)
      .setName("What are you looking for?")
      .addText(text => text.onChange(value => this.result = value));

    new Setting(this.contentEl)
      .addButton(btn => btn
        .setButtonText("Search")
        .setCta()
        .onClick(() => this.search()));

    this.imageList = this.contentEl.createEl("ul", { cls: "responsive-gallery" });
  }

  private async callApi(query: string): Promise<string[]> {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&cx=${this.settings.searchEngineId}&searchType=image&num=10&key=${this.settings.apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.items.map((item: any) => item.link);
  }

  private async search() {
    this.imageList.empty();
    try {
      const results = await this.callApi(this.result);
      results.forEach(elem => {
        const li = this.imageList.createEl("li");
        li.createEl("img", { attr: { src: elem } }).onClickEvent(() => {
          this.onSubmit(elem);
          this.close();
        });
      });
    } catch (error) {
      this.imageList
        .createDiv({ cls: "responsive-gallery-error" })
        .setText("Search was unsuccessful. Please check your connection, the API Key and Search engine ID in settings.");
    }
  }

  onClose() {
    this.contentEl.empty();
  }
}

