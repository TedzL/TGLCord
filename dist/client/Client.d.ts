/// <reference types="node" />
import { Client as BaseClient, ClientOptions, Collection } from 'discord.js';
import { PathLike } from 'fs';
import { Command } from '../structures/Command';
import { Event } from '../structures/Event';
export declare class Client extends BaseClient {
    token: string;
    commands: Collection<string, Command>;
    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(token: string, options: ClientOptions, events: Event[], slashFolder: PathLike);
    loadSlashCommands(slashFolder: PathLike): Promise<void>;
    loadEvents(events: Event[]): void;
}
