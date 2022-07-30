import { ClientEvents } from "discord.js";
import { Client } from "../client/Client";
declare type ValueOf<T> = T[keyof T];
declare type ClientEventArg = ValueOf<ClientEvents>;
export declare class Event {
    id: keyof ClientEvents;
    handle: (client: Client, ...args: ClientEventArg) => void;
    constructor(id: keyof ClientEvents, handle: (client: Client, ...args: ClientEventArg) => void);
}
export {};
