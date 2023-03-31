<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

	import { page } from '$app/stores';
	import { index, loaded, screenType } from '$lib/store/store';

	// import AsciiRenderer from '$lib/components/effects/ascii-renderer.js';

	$: $index, lookAtIndex($index);
	let id;

	onDestroy(() => cancelAnimationFrame(id));

	let group;

	let container;
	let asciiRenderer;

	let mouseX = 0,
		mouseY = 0;

	let width = window.innerWidth;
	let height = window.innerHeight;

	let windowHalfX = width / 2;
	let windowHalfY = height / 2;
	let no_itemsLoaded = 0;
	let no_itemsTotal = 6;

	let charSet = 'REPLIKAMASTERWORKS';

	// Setting up the renderer. This will be called later to render scene with the camera setup above
	let renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
	renderer.setClearColor(0x1b1b1b, 0);

	onMount(() => {
		container.appendChild(renderer.domElement);

		// asciiRenderer = new AsciiRenderer(renderer, {
		// 	charSet: charSet,
		// 	fontSize: 6,
		// 	opacity: 0
		// });

		renderer.setSize(width, height);

		//renderer.setSize(width, height);
	});

	let camera = new THREE.PerspectiveCamera(22, width / height, 1, 3000);
	camera.position.z = 1400;

	let scene = new THREE.Scene();
	// scene.background = new THREE.Color(0x171717);

	const light = new THREE.DirectionalLight(0xe3dac9);
	light.position.set(0, 1, 1);
	scene.add(light);

	let gridHelper = new THREE.GridHelper(10000, 50, 0x171717, 0x171717);
	gridHelper.position.y -= 240;
	scene.add(gridHelper);

	const geometry = new THREE.PlaneGeometry(10000, 10000);
	const mptmaterial = new THREE.MeshBasicMaterial({ color: 0xe3dac9, side: THREE.DoubleSide });
	const plane = new THREE.Mesh(geometry, mptmaterial);
	plane.rotation.x = Math.PI / 2;
	plane.position.y -= 250;
	scene.add(plane);

	{
		const color = 0xe3dac9; // white
		const near = 10;
		const far = 2800;
		scene.fog = new THREE.Fog(color, near, far);
	}

	// shadow

	const canvas = document.createElement('canvas');
	canvas.width = 128;
	canvas.height = 128;

	const wireframeMaterial = new THREE.MeshBasicMaterial({
		color: 0x232323,
		wireframe: true
	});

	group = new THREE.Group();
	scene.add(group);

	// -------------------------------------------------------------------------

	// LOADING MANAGER
	const manager = new THREE.LoadingManager();
	manager.onStart = function (url, itemsLoaded, itemsTotal) {
		// console.log(
		// 	'Started loading file: ' +
		// 		url +
		// 		'.\nLoaded ' +
		// 		itemsLoaded +
		// 		' of ' +
		// 		itemsTotal +
		// 		' files.'
		// );
	};

	let setLoaded = () => {
		loaded.update(() => true);
	};

	manager.onLoad = function () {
		setTimeout(() => setLoaded(), 500);

		// console.log('Loading complete!');
	};

	manager.onProgress = function (url, itemsLoaded, itemsTotal) {
		no_itemsLoaded = itemsLoaded;
		// console.log(
		// 	'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
		// );
	};

	manager.onError = function (url) {
		// console.log('There was an error loading ' + url);
	};

	// -------------------------------------------------------------------------

	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath('/draco/');

	const gltfLoader = new GLTFLoader(manager);
	gltfLoader.setDRACOLoader(dracoLoader);

	let bunGroup = new THREE.Group();
	let ratGroup = new THREE.Group();
	let mewtwoGroup = new THREE.Group();

	gltfLoader.load('/assets/bun_compressed.glb', (glb) => {
		let bun = glb.scene.children[0];
		bun.rotation.x -= Math.PI / 2;
		bun.rotation.z = -Math.PI / 3;
		// bun.rotation.z += 0.2;
		// bun.position.z -= 100;
		// bun.position.z += 100;
		bun.material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });

		bun.position.y -= 80;
		bun.position.x -= 50;

		bun.scale.set(8, 8, 8);

		let bun2 = bun.clone();
		bun2.material = new THREE.MeshBasicMaterial({
			color: 0x232323,
			wireframe: true
		});
		bun2.scale.set(8.03, 8.03, 8.03);

		bunGroup.add(bun);
		bunGroup.add(bun2);
	});

	gltfLoader.load('/assets/mewtwo_compressed.glb', (glb) => {
		let mewtwo = glb.scene.children[0];
		mewtwo.position.y -= 50;

		mewtwo.material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });

		mewtwo.scale.set(4, 4, 4);
		mewtwoGroup.add(mewtwo);

		let mewtwo2 = mewtwo.clone();
		mewtwo2.material = new THREE.MeshBasicMaterial({
			color: 0x232323,
			wireframe: true
		});
		mewtwo2.scale.set(4.03, 4.03, 4.03);

		mewtwoGroup.add(mewtwo2);
	});

	gltfLoader.load('/assets/rat_compressed.glb', (glb) => {
		let rat = glb.scene.children[0];
		rat.rotation.x -= Math.PI / 2;
		rat.rotation.z = -Math.PI / 1.5;
		rat.position.x -= 100;
		rat.position.y -= 20;
		// rat.material = wireframeMaterial;
		rat.material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });
		// rat.material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });

		rat.scale.set(15, 15, 15);
		ratGroup.add(rat);

		let rat2 = rat.clone();
		rat2.material = new THREE.MeshBasicMaterial({
			color: 0x232323,
			wireframe: true
		});
		rat2.scale.set(15.03, 15.03, 15.03);

		ratGroup.add(rat2);
	});

	group.add(mewtwoGroup);
	group.add(ratGroup);
	group.add(bunGroup);

	let meshes = [mewtwoGroup, bunGroup, ratGroup];

	let totalObjects = meshes.length;
	let r = 400;

	// const shadowTexture = new THREE.CanvasTexture(canvas);

	// const shadowMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture });
	// const shadowGeo = new THREE.PlaneGeometry(300, 300, 1, 1);

	// let shadowMesh;

	for (let i = 0, len = totalObjects; i < len; i++) {
		let theta = (Math.PI * 2) / totalObjects;
		let angle = theta * i;

		let x = r * Math.sin(angle);
		let z = r * Math.cos(angle);

		meshes[i].position.x = x;
		meshes[i].position.z = z;

		// shadowMesh = new THREE.Mesh(shadowGeo, shadowMaterial);
		// shadowMesh.position.x = x;
		// shadowMesh.position.y = -250;
		// shadowMesh.position.z = z;
		// shadowMesh.rotation.x = -Math.PI / 2;

		// renderer = new THREE.WebGLRenderer({ antialias: false });
		// renderer.setPixelRatio(window.devicePixelRatio);
		// renderer.setSize(window.innerWidth, window.innerHeight);
	}
	document.addEventListener('mousemove', onDocumentMouseMove);
	window.addEventListener('resize', onWindowResize);

	function onWindowResize() {
		width = window.innerWidth;
		height = window.innerHeight;

		windowHalfX = width / 2;
		windowHalfY = height / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		// asciiRenderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onDocumentMouseMove(event) {
		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	function lookAtIndex(index) {
		console.log(index);
		group.rotation.y = ((Math.PI * 2) / 3) * -index;
	}

	// function animate() {
	// 	requestAnimationFrame(animate);
	// 	render();
	// }

	let render = function () {
		renderer.render(scene, camera);
		id = requestAnimationFrame(render);

		camera.position.x += (mouseX - camera.position.x * 4) * 0.01;
		camera.position.y += (-mouseY - camera.position.y * 10) * 0.01;

		camera.lookAt(scene.position);
	};

	render();
</script>

{#if !$loaded && $page.url.pathname == '/' && $screenType == 3}
	<div class="loader">
		<p>Loading {no_itemsLoaded} / {no_itemsTotal}</p>
		<!-- <a href="/work">skip</a> -->
	</div>
{/if}
<div bind:this={container} class:geometry={$loaded} />

<style>
	div {
		opacity: 0;
	}
	.geometry {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		z-index: -10;
		opacity: 0.9;
		transition: opacity ease-in 1.5s;

		width: 100%;
		height: 100%;
		/* height: calc(var(--vh, 1vh) * 100); */
	}

	.loader {
		opacity: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--white);

		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	a {
		color: var(--accent);
	}
</style>
