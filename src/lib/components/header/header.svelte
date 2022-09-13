<script>
	import Nav from './nav.svelte';
	import Logo from './logo.svelte';
	// stub data out
	const navItems = [
		{
			name: 'OBJECTS',
			href: '/'
		},
		{
			name: 'ABOUT',
			href: '/ABOUT'
		},
		{
			name: 'CONTACT',
			href: '/CONTACT'
		}
	];
</script>

<header>
	<Logo />
	<div />
	<div />
	<Nav {navItems} />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 40px;
		height: 88px;
		border-bottom: solid 1px var(--white);
		user-select: none;
	}
</style>
