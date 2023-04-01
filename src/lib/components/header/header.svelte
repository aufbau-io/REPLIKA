<script>
	import Nav from './nav.svelte';
	import Logo from './logo.svelte';
	import { screenType, iframe, absoluteIndex } from '$lib/store/store';
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

	function goToContact() {
		absoluteIndex.set(2);
	}

	function goHome() {
		absoluteIndex.set(0);
	}
</script>

<header class={$screenType != 1 ? '' : 'desktop'}>
	<h5 on:click={() => goHome()}>REPLIKA</h5>
	{#if $screenType == 2 || $screenType == 3}
		<h5 on:click={() => goToContact()}>CONTACT</h5>
	{/if}

	<!-- {#if $screenType == 3 && !$iframe}
		<Nav {navItems} />
	{/if} -->
</header>

<style>
	header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		max-width: 100vw;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 20px;
		height: 60px;
		/* border-bottom: solid 1px var(--primary-50); */
		/* background: var(--background); */
		user-select: none;
	}

	h5 {
		letter-spacing: 0.08em;
		font-size: 22px;
		margin: 0 5px;
		padding-top: 10px;

		cursor: pointer;
	}

	header.desktop {
		justify-content: space-around;
	}
</style>
