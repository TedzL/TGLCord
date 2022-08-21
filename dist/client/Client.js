"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const rest_1 = require("@discordjs/rest");
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
class Client extends discord_js_1.Client {
    /**
     * @param {ClientOptions} options - The discord.js client options
     * @param {fs.PathLike} eventsFolder - The absolute path for the events folder
     * @param {fs.PathLike} slashFolder - The absolute path for the slash commands folder
    */
    constructor(token, appID, options, eventsFolder, slashFolder) {
        console.log("Starting bot...");
        super(options);
        this.commands = new discord_js_1.Collection();
        console.log("Initialised base client");
        this.token = token;
        this.appID = appID;
        console.log("Loading events:");
        this.loadEvents(eventsFolder);
        console.log("Loading commands:");
        this.loadSlashCommands(slashFolder);
        console.log("All done! - Bot loaded.");
    }
    loadSlashCommands(slashFolder) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventFiles = (0, fs_1.readdirSync)(slashFolder).filter(file => file.endsWith('.js') && !file.startsWith('_'));
            const commandData = [];
            for (const file of eventFiles) {
                const command = require(`${slashFolder}/${file}`);
                commandData.push(command.data.toJSON());
                this.commands.set(command.data.name, command);
            }
            if (commandData.length === 0)
                return;
            const rest = new rest_1.REST({ version: '10' }).setToken(this.token);
            yield rest.put(discord_js_1.Routes.applicationGuildCommands(this.appID, '906348691764420669'), { body: commandData });
            this.on('interactionCreate', interaction => {
                if (!interaction.isChatInputCommand())
                    return;
                const command = this.commands.get(interaction.commandName);
                command === null || command === void 0 ? void 0 : command.handle(this, interaction);
            });
        });
    }
    loadEvents(eventsFolder) {
        const eventFiles = (0, fs_1.readdirSync)(eventsFolder).filter(file => file.endsWith('.js') && !file.startsWith('_'));
        for (const file of eventFiles) {
            const event = require(`${eventsFolder}/${file}`);
            this.on(event.id, (...args) => event.handle(this, ...args));
        }
    }
}
exports.Client = Client;
function abc(args) {
}
