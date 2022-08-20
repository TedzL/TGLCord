import { CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js";

export class Command {
    data: SlashCommandBuilder | SlashCommandSubcommandGroupBuilder;
    handle: (interaction: CommandInteraction) => void;

    constructor(data: SlashCommandBuilder, handle: (interaction: CommandInteraction) => void) {
        this.data = data;
        this.handle = handle;
    }
}