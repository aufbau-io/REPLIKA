<script>
	import Nav from './nav.svelte';
	import { index } from '$lib/store/store';

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
	<Nav {navItems} section={$index - 1} />
</main>

<style>
	main {
		padding-top: 65px;
		padding-bottom: 50px;
		display: flex;
		justify-content: space-between;
		background: #121212aa;
	}
</style>
