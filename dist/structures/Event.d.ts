import { ClientEvents } from "discord.js";
import { Client } from "../client/Client";
import { EventArgs } from "../typings/Events";
export declare class Event {
    id: keyof ClientEvents;
    handle: (client: Client, ...args: EventArgs) => void;
    constructor(id: keyof ClientEvents, handle: (client: Client, ...args: EventArgs) => void);
}
