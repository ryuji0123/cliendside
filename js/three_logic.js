function showTexturedBox()
{
	const width = 500;
	const height = 500;
	const canvas = document.getElementById('canvas');
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	canvas.appendChild(renderer.domElement);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, 1000);

	const texLoader = new THREE.TextureLoader();
	texLoader.load('pokemon/images/001Bulbasaur.png', function (texture) {
		console.log(texture);
		let tmpimg = document.createElement('img');
		tmpimg.src = 'pokemon/images/001Bulbsaur.png';
		console.log(tmpimg);
		const geometry = new THREE.BoxGeometry(400, 400, 400);
		const material = new THREE.MeshBasicMaterial({map: tmpimg});
		const box = new THREE.Mesh(geometry, material);
		scene.add(box);
		}
	);
	//const geometry = new THREE.BoxGeometry(400, 400, 400);
  //const material = new THREE.MeshNormalMaterial();
  //const box = new THREE.Mesh(geometry, material);
	//scene.add(box);
	renderer.render(scene, camera);
}
