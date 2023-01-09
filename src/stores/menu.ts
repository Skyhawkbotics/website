import { writable } from "svelte/store";

export const isMenuOpen = writable<boolean>(true);
