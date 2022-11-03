<script>
	import { page } from '$app/stores';

	export let navItems = [];
	export async function load() {
		return {
			props: {
				navItems
			}
		};
	}

	let activeMapping = {
		'/contact': '/contact',
		'/work': '/work'
	};
</script>

<nav>
	{#each navItems as navItem}
		<a
			class="lrg"
			href={navItem.href}
			class:active={navItem.href === activeMapping[$page.url.pathname]}
			>[&nbsp;{navItem.name}&nbsp;]</a
		>
	{/each}
</nav>

<style>
	nav a {
		line-height: 110%;
		font-weight: 400;
		letter-spacing: 0.05em;
		padding: 10px;
		cursor: pointer;
		opacity: 0.3;
	}

	.active {
		opacity: 1;
	}
</style>
