import { CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js";
import { Client } from "../client/Client";

export class Command {
    data: SlashCommandBuilder | SlashCommandSubcommandGroupBuilder;
    handle: (client: Client, interaction: CommandInteraction) => void;

    constructor(data: SlashCommandBuilder, handle: (client: Client, interaction: CommandInteraction) => void) {
        this.data = data;
        this.handle = handle;
    }
}