import { ClientEvents } from "discord.js";
import { EventHandle } from "../typings/Events";
export declare class Event {
    id: keyof ClientEvents;
    handle: EventHandle;
    constructor(id: keyof ClientEvents, handle: EventHandle);
}
