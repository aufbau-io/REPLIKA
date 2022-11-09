<script>
	// import { goto } from '$app/navigation'

	import { index, absoluteIndex, transitioning } from '$lib/store/store';

	export let section;
	export let navItems = [];
	export async function load() {
		return {
			props: {
				navItems
			}
		};
	}

	const setSection = (section) => {
		triggerTransition();
		absoluteIndex.update(() => section);
	};

	let triggerTransition = () => {
		transitioning.set(true);
		setTimeout(() => {
			transitioning.set(false);
		}, 800);
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
					<p class:active={section === navItem.index}>
						{navItem.name ? navItem.name : navItem.title}
					</p>
				</div>
			</div>
		{/each}
		<!--div class="clickable">
			<a href="/contact">contact</a>
		</div-->
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
		text-align: right;
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
