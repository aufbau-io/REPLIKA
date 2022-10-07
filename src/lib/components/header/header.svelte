<script>
	import Nav from './nav.svelte';
	import Logo from './logo.svelte';
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
	<div />
	<div />
	<Nav {navItems} />
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100vw - 80px);

		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 40px;
		height: 72px;
		border-bottom: solid 1px var(--white);
		user-select: none;
	}
</style>
