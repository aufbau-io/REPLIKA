<script>
	// import '/src/app.css';
	import { onMount } from 'svelte';
	import { screenType } from '$lib/store/store';
	let Geometry;

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';
	import { page } from '$app/stores';
	import { index, transitioning } from '$lib/store/store';

	import { beforeNavigate } from '$app/navigation';

	beforeNavigate(({ from, to }) => {
		transitioning.set(true);
		setTimeout(() => {
			transitioning.set(false);
		}, 500);
	});

	onMount(async () => {
		const module = await import('$lib/components/geometry/Geometry.svelte');
		Geometry = module.default;

		// TODO - NOT A LONG TERM SOLUTION
		if ($screenType == 1 || $screenType == 2) {
			// goto(`/work`, { replaceState: false });
		}
	});

	onMount(async () => {
		// ---------------------------------------------------------------------------
		// HEIGHT
		// ---------------------------------------------------------------------------

		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		});

		// ---------------------------------------------------------------------------
		// SCREEN
		// ---------------------------------------------------------------------------
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// tablet
			screenType.set(1);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			screenType.set(2);
		} else {
			//laptop
			screenType.set(3);
		}
	});
</script>

<svelte:component this={Geometry} />

{#if $screenType == 1 || $screenType == 2}
	<div id="phoneBlock"><p class="sml">wip, use desktop</p></div>
{:else if $screenType == 3}
	<Header />
	<slot />
	<Footer />
{/if}

{#if $transitioning}
	<div class="cover">
		<div class="line" />
	</div>
{/if}

<style>
	#phoneBlock {
		position: absolute;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);

		width: 100vw;
		background: var(--background);
		z-index: 1000;
	}

	.cover {
		position: absolute;
		top: 66px;
		left: 0;
		height: calc(100vh - 121px);
		width: 100vw;
		background: none;

		animation-name: example;
		animation-duration: 0.5s;
	}

	@keyframes example {
		0% {
			background: var(--black);
			opacity: 1;
		}
		25% {
			background: var(--black);
			opacity: 1;
		}
		100% {
			background: var(--black);
			opacity: 0;
		}
	}
</style>
