/// <reference types="node" />
import { Client as BaseClient, ClientOptions } from 'discord.js';
import { PathLike } from 'fs';
export declare class Client extends BaseClient {
    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(options: ClientOptions, eventsFolder: PathLike, slashFolder: PathLike);
    loadEvents(eventsFolder: PathLike): void;
}
