import { ClientEvents } from "discord.js";
import { Client } from "../client/Client";
import { EventHandle } from "../typings/Events";

export class Event {
    id: keyof ClientEvents;
    handle: EventHandle;

    constructor(id: keyof ClientEvents, handle: EventHandle) {
        this.id = id;
        this.handle = handle;
    }
}