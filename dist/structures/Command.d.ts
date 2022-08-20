import { CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js";
export declare class Command {
    data: SlashCommandBuilder | SlashCommandSubcommandGroupBuilder;
    handle: (interaction: CommandInteraction) => void;
    constructor(data: SlashCommandBuilder, handle: (interaction: CommandInteraction) => void);
}
