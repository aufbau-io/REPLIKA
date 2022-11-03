<script>
</script>

<main>
	<div class="item flex">
		<div class="full">
			<h1>CONTACT</h1>
			<a href="/">
				<h1 class="clickable">X</h1>
			</a>
		</div>
		<div class="items">
			<h2>ADDRESS : 2020 SE Bush Street, Portland OR</h2>
			<a href="mailto: Replikamasterworks@gmail.com"
				><h2>EMAIL : Replikamasterworks@gmail.com</h2></a
			>
			<h2>PHONE : +1 (503)-756-6252</h2>
		</div>
	</div>
</main>

<style>
	main {
		margin-top: 65px;
		padding-top: 2rem;
		display: flex;
		justify-content: space-between;
		height: calc(100vh - 120px);
		background: #121212aa;
	}

	h1 {
		font-family: nb-television, sans-serif;
	}

	h1.clickable {
		cursor: pointer;
	}

	h1.clickable:hover {
		font-family: nb-television-3d, sans-serif;
	}

	h2 {
		font-size: 3.6vw;
	}

	.item {
		width: 100%;
	}

	.full {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.item.flex {
		display: flex;
		justify-content: space-between;
		flex-flow: column nowrap;
		padding: 0 40px;
	}

	.items {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		margin-bottom: 40px;
	}

	@media only screen and (max-width: 1000px) {
		.items {
			height: 40%;
			margin-bottom: auto;
		}
	}
</style>
