<script>
</script>

<main>
	<div class="item flex">
		<h1>REPEAT</h1>
		<a href="/">
			<h1 class="clickable">X</h1>
		</a>
		<div class="center">
			<a href="/"><h6>[ WIP, RETURN ]</h6></a>
		</div>
	</div>
</main>

<style>
	main {
		padding-top: 80px;
		display: flex;
		justify-content: space-between;
		min-height: calc(100vh - 150px);
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
		font-size: 72px;
	}

	.item {
		width: 100%;
	}

	.item.flex {
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		padding: 0 40px;

		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}

	.center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
