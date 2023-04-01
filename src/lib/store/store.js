import { writable, derived } from 'svelte/store';

export const animations = writable(true);
export const absoluteIndex = writable(0);
export const screenType = writable(3);
export const iframe = writable(null);
export const loaded = writable(false);

// javascript modulo doesn't work on negative numbers
function mod(n, m) {
	return ((n % m) + m) % m;
}

export const index = derived(absoluteIndex, ($absoluteIndex) => mod($absoluteIndex, 3) + 1);
