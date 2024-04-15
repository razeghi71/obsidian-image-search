# Image Search Plugin for Obsidian

The Image Search plugin enables Obsidian users to search for images via Google's Programmable Search Engine directly within Obsidian. This document provides detailed instructions on how to set up and use the plugin.

## Installation

1. **Download** the Image Search plugin from Obsidian's community plugins list.
2. **Install** the plugin via Obsidian’s settings under "Community Plugins".
3. **Enable** the plugin from the "Installed Plugins" tab.

## Prerequisites

Before using the Image Search plugin, you must obtain a Google API Key and a Search Engine ID from Google's Programmable Search Engine.


### Step 1: Create a Search Engine ID

1. **Go to** the Google Programmable Search Engine site: [Programmable Search Engine](http://programmablesearchengine.google.com) and Create a new search engine.
2. Name your Search Engine.
3. In the **What to search?** section, select **"Search the entire web"**.
4. **Enable "Image Search"** in the "Search settings". You may also enable "Safe search" if desired.
5. **Click "Create"**. After creation, you will be redirected to a page where your Search Engine ID is displayed. **Copy this ID and keep it secure.**

### Step 2: Obtain a Google API Key

1. At the bottom of the search engine configuration page, in the **"Programmatic Access"** section, click on **"Get Started"** next to "Custom Search JSON API. Limit of 10,000 queries per day."
2. Click the **"Get Key"** button which will open a modal.
3. **Select the search engine** you created in the previous step. You will then be provided with an API Key. **Copy this key and keep it secure.**

## Configuration

1. **Open plugin settings** in Obsidian by navigating to Settings -> Community Plugins -> Image Search.
2. **Enter your Google API Key and Search Engine ID** in the respective fields provided in the plugin settings.

## Usage

1. **Open the command palette** in Obsidian (default shortcut `Ctrl/Cmd + P`).
2. **Type `Image Search`** and select it from the list.
3. **Enter your search query** in the popup and press Enter.
4. **Select an image** from the results displayed to insert into your current document.

## Support

For support you can [buy me a coffee](https://www.buymeacoffee.com/marzghi). 

For feature requests, or to report issues, please visit the [Github Page](https://github.com/razeghi71/obsidian-image-search) for this plugin.

Thank you for using the Image Search plugin for Obsidian!