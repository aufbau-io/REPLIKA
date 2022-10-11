<script>
	import Nav from './nav.svelte';
	import Logo from './logo.svelte';
	import { screenType } from '$lib/store/store';
	// stub data out
	const navItems = [
		{
			name: 'SERVICES',
			href: '/'
		},
		{
			name: 'CONTACT',
			href: '/contact'
		}
	];
</script>

<header>
	<Logo />
	{#if $screenType == 3}
		<div />
		<div />
		<Nav {navItems} />
	{/if}
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20px;
		height: 66px;
		border-bottom: solid 1px var(--white);
		user-select: none;
	}
</style>
