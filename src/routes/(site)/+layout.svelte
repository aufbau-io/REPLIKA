<script>
	// import '/src/app.css';
	import { onMount } from 'svelte';
	import { screenType } from '$lib/store/store';
	let Geometry;

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	import content from '$lib/data/page_content.json';

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

	let img1_src = content.design.img_src;
	let img2_src = content.scan.img_src;
	let img3_src = content.print.img_src;
	let img4_src = content.contact.img_src;
</script>

<svelte:head>
	<title>REPLIKA</title>

	<link rel="preload" href={img1_src} as="image" />
	<link rel="preload" href={img2_src} as="image" />
	<link rel="preload" href={img3_src} as="image" />
	<link rel="preload" href={img4_src} as="image" />

	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Architekt-Pro-Bold.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Architekt-Pro-Regular.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Architekt-Pro-Light.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>

	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Television-Pro-Mono-2D.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Television-Pro-Mono-3D.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
	<link
		rel="preload"
		as="font"
		href="/fonts/NB-Television-Pro-Mono.woff"
		type="font/woff"
		crossorigin="anonymous"
	/>
</svelte:head>

<svelte:component this={Geometry} />

{#if $screenType == 1 || $screenType == 2}
	<div id="phoneBlock"><p class="sml">wip, use desktop</p></div>
{:else if $screenType == 3}
	<Header />
	<slot />
	<Footer />
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
</style>
