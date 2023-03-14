<script>
	import Nav from './nav.svelte';
	import Logo from './logo.svelte';
	import { screenType, iframe } from '$lib/store/store';
	// stub data out
	const navItems = [
		{
			name: 'HOME',
			href: '/'
		},
		{
			name: 'WORK',
			href: '/work'
		},
		{
			name: 'CONTACT',
			href: '/contact'
		}
	];
</script>

<header class={$screenType == 3 ? 'desktop' : ''}>
	<Logo />
	{#if $screenType == 3 && !$iframe}
		<Nav {navItems} />
	{/if}
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		max-width: 100vw;

		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 0px 20px;
		height: 60px;
		/* border-bottom: solid 1px var(--white-50); */
		/* background: var(--black); */
		user-select: none;
		z-index: 100;
	}

	header.desktop {
		justify-content: space-between;
	}
</style>
