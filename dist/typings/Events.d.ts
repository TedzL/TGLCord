import { ClientEvents } from "discord.js";
declare type ValueOf<T> = T[keyof T];
export declare type EventID = keyof ClientEvents;
export declare type EventArgs = ValueOf<ClientEvents>;
export {};
