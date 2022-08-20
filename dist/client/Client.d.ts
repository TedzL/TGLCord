/// <reference types="node" />
import { Client as BaseClient, ClientOptions, Collection } from 'discord.js';
import { PathLike } from 'fs';
import { Command } from '../structures/Command';
export declare class Client extends BaseClient {
    appID: string;
    token: string;
    commands: Collection<string, Command>;
    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(token: string, appID: string, options: ClientOptions, eventsFolder: PathLike, slashFolder: PathLike);
    loadSlashCommands(slashFolder: PathLike): Promise<void>;
    loadEvents(eventsFolder: PathLike): void;
}
