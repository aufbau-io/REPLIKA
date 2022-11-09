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

{#if transitioning}
	<div class="cover">
		<div class="line" />
	</div>
{/if}

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

		animation-name: example;
		animation-duration: 0.5s;
	}

	@keyframes example {
		0% {
			background: var(--black);
		}
		50% {
			background: var(--black);
		}
		100% {
			background: #12121200;
		}
	}
</style>
