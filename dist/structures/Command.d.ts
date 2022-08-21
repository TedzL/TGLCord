import { CommandInteraction, SlashCommandBuilder, SlashCommandSubcommandGroupBuilder } from "discord.js";
import { Client } from "../client/Client";
export declare class Command {
    data: SlashCommandBuilder | SlashCommandSubcommandGroupBuilder;
    handle: (client: Client, interaction: CommandInteraction) => void;
    constructor(data: SlashCommandBuilder, handle: (client: Client, interaction: CommandInteraction) => void);
}
