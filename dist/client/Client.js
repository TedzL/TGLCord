"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
class Client extends discord_js_1.Client {
    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(options, eventsFolder, slashFolder) {
        console.log("Starting bot...");
        super(options);
        console.log("Initilaised base client");
        console.log("Loading events:");
        this.loadEvents(eventsFolder);
    }
    loadEvents(eventsFolder) {
        const eventFiles = (0, fs_1.readdirSync)(eventsFolder).filter(file => file.endsWith('.js') && !file.startsWith('_'));
        for (const file of eventFiles) {
            // console.log(file);
            // console.log("-----")
            const event = require(`${eventsFolder}/${file}`).event;
            this.addListener(event.id, (...args) => event.handle(this, ...args));
        }
    }
}
exports.Client = Client;
