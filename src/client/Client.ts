import { Client as BaseClient, ClientOptions } from 'discord.js'
import fs, { readdirSync, PathLike } from 'fs'
import { Event } from '../structures/Event';
import { EventArgs } from '../typings/Events';

export class Client extends BaseClient {

    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(options: ClientOptions, eventsFolder: PathLike, slashFolder: PathLike) {
        console.log("Starting bot...");
        super(options);
        console.log("Initilaised base client");
        console.log("Loading events:")
        this.loadEvents(eventsFolder);
    }

    loadEvents(eventsFolder: PathLike) {
        const eventFiles = readdirSync(eventsFolder).filter(file => file.endsWith('.js') && !file.startsWith('_'));
        for (const file of eventFiles) {
            const event: Event = require(`${eventsFolder}/${file}`);
            this.on(event.id, (...args) => event.handle(this, ...args));
        }
    }
}

function abc(args: EventArgs) {

}