<script>
	import { screenType } from '$lib/store/store';
	import { email, phone, address } from '$lib/data/contact.json';
	import { footer_1, footer_2 } from '$lib/data/misc.json';

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
				{#if $screenType == 1 || $screenType == 2}
					<a href="mailto: {email}">{email}</a>
					<p>{phone}</p>
					<br />
				{/if}
				<p>{footer_1}</p>
				<p>{footer_2}</p>

				<p>{address}</p>
				{#if $screenType == 1 || $screenType == 2}
					<br />
				{/if}
				<a href="https://aufbau.io" target="blank_">ein aufbau ding</a>
			</div>
		</section>
	{/if}
	{#if $screenType == 1 || $screenType == 2}
		<div class="contactToggle">
			<h5 on:click={() => toggleShowFooter()}>{contactText}</h5>
		</div>
	{/if}
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
		}

		.contactToggle {
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
