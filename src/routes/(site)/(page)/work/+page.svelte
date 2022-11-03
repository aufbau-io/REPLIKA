<script>
	import Nav from './nav.svelte';
	import { index } from '$lib/store/store';
	import { screenType } from '$lib/store/store';

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
			<h5>{navItems[$index - 1].name} Subtitle</h5>
		</div>
		<div class="body__text">
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
	</div>
</main>

<style>
	main {
		height: calc(100vh - 115px);

		display: flex;
		justify-content: space-between;
		gap: 2rem;

		margin-top: 65px;
		padding: 2rem;
		margin-bottom: 50px;
		background: #121212aa;
	}

	.nav {
		width: 200px;
		height: 100%;
	}

	.body {
		width: 100%;
		height: 100%;

		padding-bottom: 2rem;
	}

	.body__subtitle {
		height: 60px;
	}

	.body__text {
		height: calc(100% - 30px);
		overflow: auto;
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
