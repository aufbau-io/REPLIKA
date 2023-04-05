<script>
	import { screenType } from '$lib/store/store';
	import { email, phone, address } from '$lib/data/contact.json';
	import { footer_1, footer_2 } from '$lib/data/misc.json';

	let showFooter = true;
	// let toggleShowFooter = () => {
	// 	showFooter = !showFooter;
	// };

	// $: contactText = showFooter ? 'HIDE CONACT' : 'CONTACT';
</script>

<footer>
	<section>
		<div class="base">
			{#if $screenType == 1 || $screenType == 2}
				<p>REPLIKA MASTERWORKS</p>
				<p>-</p>
				<p>A figurine making company based in Portland OR</p>
				<p>Proudly Presented by Hal Fackler</p>
				<p>-</p>
			{/if}
			{#if $screenType == 1 || $screenType == 2}
				<a href="mailto: {email}">{email}</a>
				<p>{phone}</p>
			{/if}
			{#if $screenType == 3}
				<p>{footer_1}</p>
				<p>{footer_2}</p>
			{/if}

			<p>{address}</p>

			{#if $screenType == 1 || $screenType == 2}
				<p>-</p>
				<br />
			{/if}
			{#if $screenType == 3}
				<a href="https://aufbau.io" target="blank_">ein aufbau ding</a>
			{/if}
		</div>
		{#if $screenType == 1 || $screenType == 2}
			<p>This website is fancier on desktop</p>
		{/if}
	</section>
	<!-- {#if $screenType == 1 || $screenType == 2}
		<div class="contactToggle">
			<h5 on:click={() => toggleShowFooter()}>{contactText}</h5>
			<h5 on:click={() => toggleShowFooter()}>{contactText}</h5>
		</div>
	{/if} -->
</footer>

<style>
	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 5px 20px;
		padding-top: 10px;
		width: 100vw;
		max-width: 100vw;
		/* border-top: solid 1px var(--primary-50);
		background: var(--background-50); */
		color: var(--primary);
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
			background: var(--primary);
			color: var(--background);
			padding: 15px 20px;
			padding-bottom: 10px;
		}

		.base {
			flex-flow: column nowrap;
			align-items: flex-start;

			justify-content: center;
		}

		.contactToggle {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		section {
			height: calc(var(--vh, 1vh) * 100 - 20px);
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
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
