<script>
	import Logo from './aufbauLogo.svelte';
	// import FormField from '$lib/components/common/formField.svelte';
</script>

<footer>
	<section>
		<main />

		<div class="base">
			<p class="sml">Copyright 2022</p>
			<h1>REPLIKA STUDIO</h1>
			<p class="sml">2020 SE Bush Street Portland</p>
		</div>
	</section>
</footer>

<style>
	footer {
		margin: 0 40px;
	}

	main {
		display: flex;
		margin: 0px 98px 0px 98px;
	}

	h1 {
		font-size: 18px;
	}

	.base {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 60px;
		border-top: solid 1px var(--white-50);
	}
</style>
