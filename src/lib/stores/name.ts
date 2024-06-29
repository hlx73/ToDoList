import { persisted } from "svelte-persisted-store";

export let name=persisted('name','Unknown');
