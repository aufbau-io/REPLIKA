<script>
	import { index, absoluteIndex, iframe } from '$lib/store/store.js';
	import { screenType, loaded } from '$lib/store/store';

	import { email, phone, address } from '$lib/data/contact.json';
	import { lazyLoad } from '$lib/functions/lazyLoad.js';
	import content from '$lib/data/page_content.json';

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
	<div class="arrows">
		<h3 on:click={turnLeft}>←</h3>
		<h3 on:click={turnRight}>→</h3>
	</div>

	{#if $screenType == 3}
		<section>
			{#if $index == 1}
				<h5>- Hal Fackler -</h5>
				<h2>REPLIKA MASTERWORKS</h2>
				<h5>A figurine making company based in Portland OR</h5>
			{/if}
			{#if $index == 2}
				<div class="row">
					<figure>
						<img use:lazyLoad={'/assets/netlifycms/model.jpg'} alt="image" />
					</figure>
					<figure>
						<img use:lazyLoad={'/assets/netlifycms/kit.jpg'} alt="image" />
					</figure>
				</div>
			{/if}
			{#if $index == 3}
				<div>
					<h5>ADDRESS:</h5>
					<h2>{address}</h2>
				</div>
				<div>
					<h5>PHONE:</h5>
					<h2>{phone}</h2>
				</div>
				<div>
					<h5>EMAIL:</h5>
					<h2>{email}</h2>
				</div>
			{/if}
		</section>
	{/if}
</main>

<style>
	main {
		position: absolute;
		top: 0;
		height: calc(100vh - 100px);
		max-height: calc(var(--vh, 1vh) * 100);
		width: 100vw;

		display: flex;
		justify-content: space-between;
		gap: 2rem;

		margin-top: 50px;
		margin-bottom: 50px;
		opacity: 0;

		overflow: hidden;
	}

	section {
		position: absolute;
		top: 0%;
		left: 25%;
		width: 50%;
		height: 100%;

		display: flex;

		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.row {
		display: flex;
		flex-flow: row nowrap;
		gap: 20px;
	}

	main.show {
		transition: opacity ease-in 1.5s 0s;
		opacity: 1;
	}

	figure {
		border: solid 2px var(--primary);
	}

	.arrows {
		display: flex;
		min-width: 100%;
		padding: 0 5vw;
		justify-content: space-between;
		align-items: center;
		user-select: none;
		color: var(--primary);

		position: absolute;
		top: 50%;
		transform: translateY(-50%);

		z-index: 10;
	}

	h3 {
		cursor: pointer;
	}

	h2 {
		letter-spacing: 0.03rem;
	}

	h5 {
		letter-spacing: 0.05rem;
	}

	.arrows h3 {
		font-family: nb-television-2d, nb-architekt, sans-serif;
		font-size: 250px;
	}

	.arrows h3:hover {
		font-family: nb-television-3d, nb-television-2d, sans-serif;
	}

	@media (max-width: 800px) {
		.arrows h3 {
			font-size: 200px;
		}
	}
</style>
