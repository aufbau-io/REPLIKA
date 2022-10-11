<script>
	import { screenType } from '$lib/store/store';
	let showFooter = false;
	let toggleShowFooter = () => {
		showFooter = !showFooter;
	};

	$: contactText = showFooter ? 'HIDE CONACT' : 'CONTACT';
</script>

<footer>
	{#if showFooter == true || $screenType == 3}
		<section>
			<div class="base">
				<p class="sml">Copyright 2022</p>
				<p>REPLIKA MASTERWORKS PDX</p>

				<p class="xs">2020 SE Bush Street Portland</p>
				<a href="https://aufbau.io">ein aufbau ding</a>
			</div>
		</section>
	{/if}
	{#if $screenType == 1 || $screenType == 2}
		<div class="text">
			<h5 on:click={() => toggleShowFooter()}>{contactText}</h5>
		</div>
	{/if}
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 10px 20px;
		width: 100vw;
		max-width: 100vw;
		border-top: solid 1px var(--white);
		background: var(--black);
		color: var(--shite);
	}

	p,
	a {
		margin: 5px 0px;
	}

	.base {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		height: auto;
	}

	@media only screen and (max-width: 768px) {
		footer {
			background: var(--accent);
			color: var(--black);
		}

		.text {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		section {
			height: calc(50vh + 2px);
		}

		h5 {
			font-size: 22px;
			font-weight: 700;
		}

		p,
		a {
			font-size: 16px;
			font-weight: 700;
		}
	}
</style>
