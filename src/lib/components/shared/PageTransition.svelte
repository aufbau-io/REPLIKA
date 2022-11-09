<!-- src/component/PageTransitions.svelte -->
<script>
	import { fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	export let url = '';

	let transitioning = false;

	beforeNavigate(({ from, to }) => {
		transitioning = true;
	});

	afterNavigate(() => {
		transitioning = false;
	});
</script>

{#key transitioning}
	{#key url}
		<div class="test" :class={transitioning} transition:fade={{ duration: 500, easing: quintOut }}>
			<slot />
		</div>
	{/key}
{/key}

<style>
	.test {
		opacity: 1;
	}

	.test.transitioning {
		opacity: 0;
	}
</style>
