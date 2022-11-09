<script>
	import { screenType } from '$lib/store/store';
	import { email, phone, address } from '$lib/data/contact.json';
</script>

<main>
	<div class="nav" />
	{#if $screenType == 3}
		<img src="/map.svg" alt="map" class="img" />
	{/if}
	<div class="body">
		<div class="body__text">
			<div>
				<h5>ADDRESS:</h5>
				<p>{address}</p>
			</div>
			<div>
				<h5>PHONE:</h5>
				<p>{phone}</p>
			</div>
			<div>
				<h5>EMAIL:</h5>
				<a href="mailto: {email}">{email}</a>
			</div>
		</div>
		<div class="body__footer">
			<a href="/"><h5>HOME</h5></a>
			<a href="/work"><h5>WORK</h5></a>
		</div>
	</div>
</main>

<style>
	main {
		position: absolute;
		top: 0;
		height: calc(100vh - 115px);
		width: 100vw;

		display: flex;
		justify-content: space-between;
		gap: 2rem;

		margin-top: 65px;
		padding: 2rem;
		margin-bottom: 50px;
		background: #121212aa;
	}

	.body {
		width: 100%;
		height: 100%;

		padding-bottom: 2rem;
	}

	.body__text {
		height: calc(100% - 32px);
		overflow: auto;
	}

	.body__text div {
		padding: 8px 0;
	}

	.body__subtitle {
		min-height: 60px;
		display: flex;
		justify-content: space-between;
		margin-bottom: 16px;
		border-bottom: solid 1px var(--white-50);
	}

	p,
	a {
		font-size: 2vw;
	}

	.body__footer {
		min-height: 60px;
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
		padding-top: 16px;
		border-top: solid 1px var(--white-50);
	}

	.body__footer h5 {
		font-family: nb-television;
		cursor: pointer;
	}

	.body__footer h5:hover {
		font-family: nb-television-2d, nb-television;
	}

	.img {
		width: 100%;
		height: 100%;
		border: solid 1px var(--white);
		overflow: hidden;

		object-fit: cover;
		object-position: center; /* Center the image within the element */
	}

	.nav {
		min-width: 120px;
		height: auto;
	}
</style>
