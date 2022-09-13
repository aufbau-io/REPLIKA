import { writable, derived } from 'svelte/store';

export const animations = writable(true);
export const absoluteIndex = writable(1);

export const index = derived(absoluteIndex, ($absoluteIndex) => $absoluteIndex % 3);
