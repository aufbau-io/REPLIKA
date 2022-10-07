<script>
	import { onMount } from 'svelte';

	import Hero from '$lib/components/common/pageHero.svelte';
	import { index, absoluteIndex } from '$lib/store/store.js';
	import { page } from '$app/stores';

	absoluteIndex.update((val) => $page.params.slug - 1);
</script>

<Hero name="OBJ_{$page.params.slug}" />
