<script>
	// import '/src/app.css';
	import { onMount } from 'svelte';
	import { screenType, iframe } from '$lib/store/store';
	let Geometry;

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	import content from '$lib/data/page_content.json';

	onMount(async () => {
		if ($screenType != 1) {
			const module = await import('$lib/components/geometry/Geometry.svelte');
			Geometry = module.default;
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
		if (window.location !== window.parent.location) {
			// The page is in an iframe
			iframe.set(true);
		}

		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// The page is not in an iframe
			// tablet
			screenType.set(2);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			// darkMode.set(false);
			// document.querySelector(':root').classList.toggle('dark-mode');
			screenType.set(1);
		} else {
			//laptop
			screenType.set(3);
		}
	});

	let img1_src = content.img1.img_src;
	let img2_src = content.img2.img_src;
</script>

<svelte:head>
	<title>REPLIKA</title>

	<link rel="preload" href={img1_src} as="image" />
	<link rel="preload" href={img2_src} as="image" />

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

{#if $screenType != 1}
	<svelte:component this={Geometry} />
{/if}

<Header />
<slot />
<Footer />
