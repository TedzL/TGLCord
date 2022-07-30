import { ClientEvents } from "discord.js";
import { Client } from "../client/Client";

type ValueOf<T> = T[keyof T];

export type EventID = keyof ClientEvents;
export type EventArgs = ValueOf<ClientEvents>;
export type EventHandle = (client: Client, ...args: EventArgs) => void;