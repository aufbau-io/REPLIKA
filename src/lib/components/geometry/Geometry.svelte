<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

	import { page } from '$app/stores';
	import { index, loaded, screenType } from '$lib/store/store';

	$: $index, lookAtIndex($index);

	let group;

	let container;

	let camera, scene, renderer;

	let mouseX = 0,
		mouseY = 0;

	let windowHalfX = window.innerWidth / 2;
	let windowHalfY = window.innerHeight / 2;

	let no_itemsLoaded = 0;
	let no_itemsTotal = 6;

	init();
	animate();

	function init() {
		camera = new THREE.PerspectiveCamera(22, window.innerWidth / window.innerHeight, 1, 3000);
		camera.position.z = 1400;

		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x121212);

		const light = new THREE.DirectionalLight(0xf0f0f0);
		light.position.set(0, 1, 1);
		scene.add(light);

		let gridHelper = new THREE.GridHelper(10000, 50, 0x141414, 0x141414);
		gridHelper.position.y -= 240;
		scene.add(gridHelper);

		const geometry = new THREE.PlaneGeometry(10000, 10000);
		const mptmaterial = new THREE.MeshBasicMaterial({ color: 0xf0f0f0, side: THREE.DoubleSide });
		const plane = new THREE.Mesh(geometry, mptmaterial);
		plane.rotation.x = Math.PI / 2;
		plane.position.y -= 250;
		scene.add(plane);

		{
			const color = 0x141414; // white
			const near = 1000;
			const far = 1800;
			scene.fog = new THREE.Fog(color, near, far);
		}

		// shadow

		const canvas = document.createElement('canvas');
		canvas.width = 128;
		canvas.height = 128;

		const wireframeMaterial = new THREE.MeshBasicMaterial({
			color: 0x606060,
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

		const gltfLoader = new GLTFLoader(manager);
		let bunGroup = new THREE.Group();
		let ratGroup = new THREE.Group();
		let skullGroup = new THREE.Group();

		gltfLoader.load('/assets/bun.glb', (glb) => {
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
				color: 0x141414,
				wireframe: true
			});
			bun2.scale.set(8.03, 8.03, 8.03);

			bunGroup.add(bun, bun2);
		});

		gltfLoader.load('/assets/mewtwo.glb', (glb) => {
			let skull = glb.scene.children[0];
			// skull.rotation.x -= Math.PI / 2;
			// skull.rotation.x -= Math.PI / 2;
			skull.position.y -= 50;

			skull.material = new THREE.MeshLambertMaterial({ color: 0xf0f0f0 });

			skull.scale.set(4, 4, 4);
			skullGroup.add(skull);
		});

		gltfLoader.load('/assets/rat.glb', (glb) => {
			let rat = glb.scene.children[0];
			rat.rotation.x -= Math.PI / 2;
			rat.rotation.z = -Math.PI / 1.5;
			rat.position.x -= 100;
			rat.position.y -= 20;
			rat.material = wireframeMaterial;

			rat.scale.set(15, 15, 15);
			ratGroup.add(rat);
		});

		group.add(skullGroup);
		group.add(ratGroup);
		group.add(bunGroup);

		let meshes = [skullGroup, bunGroup, ratGroup];

		let totalObjects = meshes.length;
		let r = 400;

		const shadowTexture = new THREE.CanvasTexture(canvas);

		const shadowMaterial = new THREE.MeshBasicMaterial({ map: shadowTexture });
		const shadowGeo = new THREE.PlaneGeometry(300, 300, 1, 1);

		let shadowMesh;

		for (let i = 0, len = totalObjects; i < len; i++) {
			var theta = (Math.PI * 2) / totalObjects;
			var angle = theta * i;

			let x = r * Math.sin(angle);
			let z = r * Math.cos(angle);

			meshes[i].position.x = x;
			meshes[i].position.z = z;

			shadowMesh = new THREE.Mesh(shadowGeo, shadowMaterial);
			shadowMesh.position.x = x;
			shadowMesh.position.y = -250;
			shadowMesh.position.z = z;
			shadowMesh.rotation.x = -Math.PI / 2;
			// if ($screenType == 3) {
			// 	scene.add(shadowMesh);
			// }
		}

		renderer = new THREE.WebGLRenderer({ antialias: false });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);

		onMount(() => {
			container.appendChild(renderer.domElement);
		});

		document.addEventListener('mousemove', onDocumentMouseMove);

		//

		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize() {
		windowHalfX = window.innerWidth / 2;
		windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function onDocumentMouseMove(event) {
		mouseX = event.clientX - windowHalfX;
		mouseY = event.clientY - windowHalfY;
	}

	function lookAtIndex(index) {
		console.log(index);
		group.rotation.y = ((Math.PI * 2) / 3) * -index;
	}

	function animate() {
		requestAnimationFrame(animate);
		render();
	}

	function render() {
		camera.position.x += (mouseX - camera.position.x * 4) * 0.01;
		camera.position.y += (-mouseY - camera.position.y * 10) * 0.01;

		camera.lookAt(scene.position);

		renderer.render(scene, camera);
	}
</script>

{#if !$loaded && $page.url.pathname == '/' && $screenType == 3}
	<div class="loader">
		<p>Loading {no_itemsLoaded} / {no_itemsTotal}</p>
		<a href="/work">skip</a>
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
		transition: opacity ease-in 1.8s;
	}

	.loader {
		opacity: 1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: VAR(--white);

		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
	}

	a {
		color: var(--accent);
	}
</style>
