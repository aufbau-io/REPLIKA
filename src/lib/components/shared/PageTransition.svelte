<!-- src/component/PageTransitions.svelte -->
<script>
	import { blur } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	export let url = '';

	let transitioning = false;

	beforeNavigate(({ from, to }) => {
		transitioning = true;
	});

	afterNavigate(() => {
		setTimeout(() => {
			transitioning = false;
		}, 500);
	});
</script>

{#key transitioning}
	{#key url}
		<div class="test" :class={transitioning}>
			<slot />
		</div>
	{/key}
{/key}

<!-- {#if transitioning}
	<div class="cover" />
{/if} -->
<style>
	.test {
		opacity: 1;
	}

	.test.transitioning {
		opacity: 0;
	}

	.cover {
		position: absolute;
		top: 66px;
		left: 0;
		height: calc(100vh - 121px);
		width: 100vw;
		background: var(--black);
		z-index: 200;

		transition: all 1s;
	}
</style>
