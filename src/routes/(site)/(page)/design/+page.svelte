<script>
</script>

<main>
	<div class="item flex">
		<h1>DESIGN</h1>
		<h1 style="letter-spacing:50px;">SCAN</h1>
		<h1 style="letter-spacing:21px;">PRINT</h1>

		<div class="text">
			<h6>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sagittis lacus. Duis
				volutpat venenatis sapien eget posuere. Nam tincidunt, erat ut scelerisque dictum, ipsum
				diam cursus ante, eget suscipit ex metus quis est. Aenean suscipit orci magna, et sagittis
				urna cursus sit amet. Maecenas ornare convallis nulla, in scelerisque tellus egestas et.
				Aliquam viverra sem in neque condimentum dictum. Cras ac commodo ipsum. Sed posuere ligula
				enim, at facilisis justo aliquet id. Suspendisse sed rutrum risus. Ut pharetra est auctor ex
				porta ullamcorper. Vestibulum scelerisque ac ligula ac elementum. Vivamus mattis risus
				purus, vitae sagittis magna lacinia et. Aenean euismod eros id urna pretium, et vehicula
				nisi finibus. Vestibulum dictum est non magna euismod pulvinar. Aenean a diam interdum,
				ullamcorper tellus non, congue leo. Aenean tortor arcu, accumsan non justo a, gravida
				faucibus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
				inceptos himenaeos. Fusce finibus aliquet nulla, eu molestie nunc gravida finibus. Curabitur
				tincidunt, nibh sit amet semper accumsan, nulla felis sodales lacus, eget sodales ante erat
				ut sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
				mus. In pellentesque nulla at libero rhoncus, fermentum lacinia sem vehicula. Aenean
				volutpat ex quis nulla gravida fringilla. Duis in justo at justo ullamcorper gravida nec ac
				magna. Donec euismod eleifend odio ac maximus. Etiam ultricies libero ac ligula consequat,
				quis gravida purus fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				Pellentesque blandit tincidunt congue. Nam sagittis magna a tempor commodo. Ut et odio
				risus. Nunc dapibus vitae mauris non volutpat.
			</h6>
		</div>
	</div>
</main>

<style>
	main {
		padding-top: 65px;
		padding-bottom: 50px;
		display: flex;
		justify-content: space-between;
		background: #121212aa;
	}

	h1 {
		font-family: nb-television, sans-serif;
		height: 150px;
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
		justify-content: space-around;
		flex-flow: column wrap;
		padding: 0 20px;

		word-break: break-all;
		word-wrap: break-word;
		text-align: justify;
	}

	.text {
		width: 100%;
		overflow: auto;
	}

	@media only screen and (max-width: 1000px) {
		.text {
			width: 100%;
		}
	}
</style>
