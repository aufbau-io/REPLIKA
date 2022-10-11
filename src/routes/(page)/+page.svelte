<script>
	import { index, absoluteIndex } from '$lib/store/store.js';
	import { screenType } from '$lib/store/store';
	absoluteIndex.update((val) => 0);

	function turnLeft() {
		console.log('left');
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		console.log('right');
		absoluteIndex.update((val) => val + 1);
	}

	let textMap = {
		1: 'print',
		2: 'scan',
		3: 'repeat'
	};
</script>

<main>
	{#if $screenType == 3}
		<div class="arrows">
			<h3 on:click={turnLeft}>←</h3>
			<a href="/services/{textMap[$index]}">
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
		font-size: 120px;
		height: 200px;
		display: flex;
		align-items: center;

		padding: 2rem;
		text-transform: uppercase;
	}

	.arrows h2:hover {
		border: solid 16px var(--white);
		padding: calc(2rem - 16px);
	}

	.arrows h2:active {
		border-color: var(--black);
	}

	@media only screen and (max-width: 1000px) {
		.arrows {
			top: 50%;
		}
	}

	@media only screen and (max-width: 768px) {
		.arrows {
		}

		.arrows--mobile {
			position: absolute;
			top: 25px;
			right: 10%;
			height: calc(100vh - 40px);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			opacity: 1;
			pointer-events: all;
		}
	}
</style>
