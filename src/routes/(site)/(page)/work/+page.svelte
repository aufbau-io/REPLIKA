<script>
	import Nav from './nav.svelte';
	import { absoluteIndex, index } from '$lib/store/store';
	import { screenType } from '$lib/store/store';
	import { lazyLoad } from '$lib/functions/lazyLoad.js';

	import content from '$lib/data/page_content.json';

	function turnLeft() {
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		absoluteIndex.update((val) => val + 1);
	}

	const navItems = [
		{
			index: 0,
			name: 'design',
			href: '/work/design'
		},
		{
			index: 1,
			name: 'scan',
			href: '/work/scan'
		},
		{
			index: 2,
			name: 'print',
			href: '/work/print'
		}
	];

	$: section_index = navItems[$index - 1].name;
</script>

<main>
	<div class="nav">
		<Nav {navItems} section={$index - 1} />
	</div>
	{#if $screenType == 3}
		{#key section_index}
			<img use:lazyLoad={content[section_index].img_src} alt="{section_index} image" />
		{/key}
	{/if}
	<div class="body">
		<div class="body__header">
			<h4 class="arrows" on:click={turnLeft}>← ←</h4>
			<h5>{section_index}</h5>
			<h4 class="arrows" on:click={turnRight}>→ →</h4>
		</div>
		<div class="body__text">
			<h5>{content[section_index].subtitle}</h5>
			<p class="lrg">
				{content[section_index].body}
			</p>
		</div>
		<div class="body__footer">
			<a href="/contact"><h5>SAY HI</h5></a>
		</div>
	</div>
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
		padding: 2rem;
		margin-bottom: 50px;
		background: #171717aa;
	}

	.nav {
		min-width: 120px;
		height: 100%;
	}

	.body {
		width: 100%;
		height: 100%;

		padding-bottom: 2rem;
	}

	.body__header {
		min-height: 60px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		border-bottom: solid 1px var(--white-50);
		text-transform: uppercase;
	}

	.arrows {
		font-family: nb-television;
		cursor: pointer;
		line-height: 44px;
		user-select: none;
	}

	.arrows:hover {
		font-family: nb-television-3d, nb-television;
	}

	.body__text {
		height: calc(100% - 108px);
		overflow: auto;
		margin-top: 8px;

		display: flex;
		flex-flow: column nowrap;
		gap: 16px;
	}

	.body__footer {
		min-height: 60px;
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
		padding-top: 16px;
		border-top: solid 1px var(--white-50);

		display: flex;

		justify-content: flex-end;
	}

	.body__footer h5 {
		font-family: nb-television;
		cursor: pointer;
	}

	.body__footer h5:hover {
		font-family: nb-television-2d, nb-television;
	}

	img {
		width: 100%;
		height: 100%;
		border: solid 1px var(--white);
		overflow: hidden;
		opacity: 0;
		transition: opacity 0.7s ease-out;

		object-fit: cover;
		object-position: center; /* Center the image within the element */
	}
</style>
