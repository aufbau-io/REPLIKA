<script>
	// import { goto } from '$app/navigation'

	import { index, absoluteIndex } from '$lib/store/store';

	export let section;
	export let navItems = [];
	export async function load() {
		return {
			props: {
				navItems
			}
		};
	}

	const setSection = (section, name) => {
		absoluteIndex.update(() => section);
	};
</script>

<nav>
	{#key $index}
		{#each navItems as navItem}
			<div
				class="clickable"
				on:click={setSection(navItem.index, navItem.name ? navItem.name : navItem.title)}
			>
				<div>
					{#if section === navItem.index}
						<span class="arrow"> X </span>
					{/if}
					{#if navItem.href}
						<a href={navItem.href} class:active={section === navItem.index} class="mono">
							{navItem.name ? navItem.name : navItem.title}
						</a>
					{:else}
						<p class:active={section === navItem.index} class="mono">
							{navItem.name ? navItem.name : navItem.title}
						</p>
					{/if}
				</div>
			</div>
		{/each}
	{/key}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	nav div {
		display: flex;
		align-items: center;
	}

	nav p,
	nav a {
		font-style: normal;
		font-weight: 300;
		font-size: 20px;
		line-height: 120%;
		padding: 2px 16px 2px 30px;
		opacity: 0.5;
	}

	nav p.tight {
		padding-left: 16px;
	}

	.clickable {
		padding: 4px;
		cursor: pointer;
		width: 100%;
	}

	.active {
		color: var(--white);
		padding-left: 4px;
		opacity: 1;
	}

	.index {
		padding-right: 0;
	}

	.index.active {
		padding-left: 8px;
	}

	.arrow {
		margin-right: 17px;
	}

	@media only screen and (max-width: 768px) {
		nav p,
		nav a {
			font-size: 16px;
		}
	}
</style>
