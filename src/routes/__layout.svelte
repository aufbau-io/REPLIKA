<script>
	import '../app.css';
	import { onMount } from 'svelte';

	let screenType;
	onMount(async () => {
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			// tablet
			screenType = 1;
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			// phone
			screenType = 2;
		} else {
			//laptop
			screenType = 3;
		}
	});
</script>

{#if screenType == 1 || screenType == 2}
	<div id="phoneBlock"><p class="sml">wip, use desktop</p></div>
{:else}
	<slot />
{/if}

<style>
	@media only screen and (max-width: 768px) {
		#phoneBlock {
			position: absolute;
			top: 0;
			left: 0;

			display: flex;
			align-items: center;
			justify-content: center;

			height: 100vh;
			width: 100vw;
			background: var(--black);
			z-index: 1000;
		}
	}
</style>
