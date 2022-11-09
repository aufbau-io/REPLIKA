<script>
	import Nav from './nav.svelte';
	import { absoluteIndex, index } from '$lib/store/store';
	import { screenType } from '$lib/store/store';

	function turnLeft() {
		// console.log('left');
		absoluteIndex.update((val) => val - 1);
	}

	function turnRight() {
		// console.log('right');
		absoluteIndex.update((val) => val + 1);
	}

	const navItems = [
		{
			index: 0,
			name: 'DESIGN',
			href: '#design'
		},
		{
			index: 1,
			name: 'SCAN',
			href: '#scan'
		},
		{
			index: 2,
			name: 'PRINT',
			href: '#print'
		}
	];
</script>

<main>
	<div class="nav">
		<Nav {navItems} section={$index - 1} />
	</div>
	{#if $screenType == 3}
		<div class="img">img placeholder</div>
	{/if}
	<div class="body">
		<div class="body__subtitle">
			<h4 class="arrows" on:click={turnLeft}>← ←</h4>
			<h5>{navItems[$index - 1].name}</h5>
			<h4 class="arrows" on:click={turnRight}>→ →</h4>
		</div>
		<div class="body__text">
			<h5>This is a {navItems[$index - 1].name} Subtitle</h5>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam ante, ultrices quis
				vehicula nec, faucibus pulvinar ex. Vestibulum at pretium massa. Proin vehicula tempus
				augue, sed ornare nisi lobortis quis. Nulla ullamcorper ante arcu, in malesuada mi pharetra
				nec. Nulla faucibus, ligula at fringilla mollis, urna lacus volutpat lorem, in dapibus est
				risus sed ligula. Fusce finibus orci sed rutrum rhoncus. Donec efficitur viverra justo, a
				tempus enim ornare eget. Aliquam eget consequat nisl. Nullam et ante vitae quam semper
				euismod. Donec sit amet consectetur justo. Phasellus quis justo non leo tincidunt congue.
				Etiam aliquam mauris ligula, ut mattis odio rhoncus ut. Sed dolor ex, consectetur eu ornare
				vel, cursus et odio. Quisque ac tempus diam, at posuere est. Vestibulum ante ipsum primis in
				faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum mi risus, dapibus vitae
				nulla et, sollicitudin lobortis nunc. Cras iaculis sapien sit amet ligula fringilla sodales.
				Morbi purus dui, molestie nec sem eget, lacinia mattis dui. Integer consectetur ligula eu
				quam venenatis, nec malesuada nisl blandit. Aenean tristique, neque vitae lobortis dictum,
				odio quam iaculis tellus, a ullamcorper sapien velit et lectus. Suspendisse tincidunt
				tincidunt leo, id posuere neque fermentum a. Donec et sapien a elit tempus porta. Aenean
				pellentesque velit sed est hendrerit gravida. Aenean volutpat accumsan dui, eu fringilla
				quam lobortis sit amet. Vestibulum placerat sapien a leo suscipit consectetur sed eu massa.
				Curabitur quis velit auctor, volutpat nisi a, porttitor neque. Aliquam lacinia in mauris at
				luctus. Mauris volutpat porta turpis vel accumsan.
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
		background: #121212aa;
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

	.body__subtitle {
		min-height: 60px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 24px;
		border-bottom: solid 1px var(--white-50);
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

	.img {
		width: 100%;
		height: 100%;
		border: solid 1px var(--white);

		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
