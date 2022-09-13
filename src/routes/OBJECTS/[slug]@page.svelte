<script context="module">
	import Hero from '$lib/components/common/pageHero.svelte';
	import { page } from '$app/stores';
</script>

<Hero
	index="03/03"
	name="OBJ_{$page.params.slug}"
	description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
/>
