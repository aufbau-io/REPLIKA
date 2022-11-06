<script>
	import { index, absoluteIndex } from '$lib/store/store.js';
	import { screenType } from '$lib/store/store';
	// absoluteIndex.update((val) => 0);

	function turnLeft() {
		console.log('left');
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		console.log('right');
		absoluteIndex.update((val) => val + 1);
	}

	let textMap = {
		1: 'design',
		2: 'scan',
		3: 'print'
	};
</script>

<svelte:head>
	<title>REPLIKA</title>
</svelte:head>

<main>
	{#if $screenType == 3}
		<div class="arrows">
			<h3 on:click={turnLeft}>←</h3>
			<a href="/work">
				<h2>{textMap[$index]}</h2>
			</a>
			<h3 on:click={turnRight}>→</h3>
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.arrows {
		display: flex;
		min-width: 100%;
		padding: 0 40px;
		justify-content: space-between;
		align-items: center;
		user-select: none;
		color: var(--white);

		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.arrows--mobile {
		opacity: 0;
		pointer-events: none;
	}

	h3,
	h2 {
		cursor: pointer;
	}

	.arrows h3 {
		font-family: nb-television-2d, sans-serif;
		font-size: 250px;
	}

	.arrows h3:hover {
		font-family: nb-television-3d, nb-television-2d, sans-serif;
	}

	.arrows h2 {
		font-size: 200px;
		display: flex;
		align-items: center;
		color: var(--white);
		padding: 2rem;
		transform: translateY(-12.5px);
		text-transform: uppercase;
		font-family: nb-architekt, sans-serif;
	}

	.arrows h2:hover {
		color: var(--white);
		font-family: nb-television, nb-architekt, sans-serif;
	}

	.arrows h2:active {
		color: var(--white);
	}

	@media only screen and (max-width: 1000px) {
		.arrows h2 {
			font-size: 130px;
		}
	}

	@media only screen and (max-width: 768px) {
	}
</style>
