import { ClientEvents } from "discord.js";
import { Client } from "../client/Client";
declare type ValueOf<T> = T[keyof T];
export declare type EventID = keyof ClientEvents;
export declare type EventArgs = ValueOf<ClientEvents>;
export declare type EventHandle = (client: Client, ...args: any) => void;
export {};
