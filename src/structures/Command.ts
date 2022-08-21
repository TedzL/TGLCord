import { CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js";
import { Client } from "../client/Client";

export class Command {
    data: SlashCommandBuilder | SlashCommandSubcommandGroupBuilder;
    handle: (client: Client | any, interaction: CommandInteraction) => void;

    constructor(data: SlashCommandBuilder, handle: (client: Client | any, interaction: CommandInteraction) => void) {
        this.data = data;
        this.handle = handle;
    }
}