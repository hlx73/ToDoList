import { persisted } from "svelte-persisted-store";

export let tasks=persisted<Task[]>('tasks',[]);
