import { REST } from '@discordjs/rest';
import { Client as BaseClient, ClientOptions, Collection, Routes } from 'discord.js'
import fs, { readdirSync, PathLike } from 'fs'
import { Command } from '../structures/Command';
import { Event } from '../structures/Event';
import { EventArgs } from '../typings/Events';

export class Client extends BaseClient {
    token: string;
    commands: Collection<string, Command> = new Collection();

    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(token: string, options: ClientOptions, events: Event[], slashFolder: PathLike) {
        console.log("Starting bot...");
        super(options);
        console.log("Initialised base client");

        this.token = token;

        console.log("Loading events:");
        this.loadEvents(events);

        console.log("Loading commands:");
        this.loadSlashCommands(slashFolder);

        console.log("All done! - Bot loaded.")
    }

    async loadSlashCommands(slashFolder: PathLike) {
        const eventFiles = readdirSync(slashFolder).filter(file => file.endsWith('.js') && !file.startsWith('_'));

        const commandData = [];

        for (const file of eventFiles) {
            const command: Command = require(`${slashFolder}/${file}`);
            commandData.push(command.data.toJSON());
            this.commands.set(command.data.name, command);                        
        }

        if (commandData.length === 0) return;

        const rest = new REST({ version: '10' }).setToken(this.token);
        await rest.put(Routes.applicationGuildCommands(this.application!.id, '906348691764420669'), { body: commandData });

        this.on('interactionCreate', interaction => {
            if (!interaction.isChatInputCommand()) return;

            const command = this.commands.get(interaction.commandName);
            command?.handle(interaction);
        })        
    }

    loadEvents(events: Event[]) {
        for (const event of events) {
            console.log(event.handle.toString());
            this.on(event.id, (...args) => event.handle(this, ...args));
        }
    }
}