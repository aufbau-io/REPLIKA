<script>
	import { index, absoluteIndex } from '$lib/store/store.js';
	import { screenType, loaded } from '$lib/store/store';

	function turnLeft() {
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		absoluteIndex.update((val) => val + 1);
	}

	let textMap = {
		1: 'design',
		2: 'scan',
		3: 'print'
	};
</script>

<main class:show={$loaded}>
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
		position: absolute;
		top: 0;
		height: calc(100vh - 115px);
		width: 100vw;

		display: flex;
		justify-content: space-between;
		gap: 2rem;

		margin-top: 65px;
		margin-bottom: 50px;
		opacity: 0;
	}

	main.show {
		transition: opacity ease-in 0.5s 1.5s;
		opacity: 1;
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

	h3,
	h2 {
		cursor: pointer;
	}

	.arrows h3 {
		font-family: nb-television-2d, nb-architekt, sans-serif;
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
