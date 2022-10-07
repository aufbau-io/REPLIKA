<script context="module">
	import { index, absoluteIndex } from '$lib/store/store.js';

	function turnLeft() {
		console.log('left');
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		console.log('right');
		absoluteIndex.update((val) => val + 1);
	}
</script>

<svelte:head>
	<title>REPLIKA STUDIO</title>
</svelte:head>

<main>
	<div class="arrows">
		<h1 on:click={turnLeft}>←</h1>
		<a href="/objects/0{$index}">
			<h2>OBJ_0{$index}</h2>
		</a>
		<h1 on:click={turnRight}>→</h1>
	</div>
</main>

<style>
	.geometry {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		z-index: -10;
		opacity: 0.8;
	}

	.arrows {
		position: absolute;
		top: 50%;
		transform: translateY(-30%);
		width: 100vw;
		padding: 0 4rem;
		display: flex;
		justify-content: space-between;
		user-select: none;
	}

	.arrows h1 {
		font-size: 250px;
		cursor: pointer;
	}

	.arrows h1:hover {
		font-family: nb-television-3d, nb-television-2d, sans-serif;
	}

	.arrows h2 {
		font-size: 150px;
		line-height: 150px;
		height: 200px;
		cursor: pointer;
		font-family: nb-television, sans-serif;
		padding: 2rem;
	}

	.arrows h2:hover {
		border: solid 16px var(--white);
		padding: calc(2rem - 16px);
	}

	.arrows h2:active {
		border-color: var(--black);
		color: var(--black);
	}

	@media only screen and (max-width: 1000px) {
		.arrows h1 {
			font-size: 240px;
		}
		.arrows h2 {
			font-size: 120px;
		}
	}
</style>
