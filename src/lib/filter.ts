import { persisted } from "svelte-persisted-store";

export const filter=persisted<'All tasks'|"Today's tasks">('filter','All tasks');
