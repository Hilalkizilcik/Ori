import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

export function init() {
  const objArea = document.querySelector('.obj3d-area')
  const windowWidth = objArea.offsetWidth
  const windowHeight = objArea.offsetHeight
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  let obj, controls, objToRender = 'character', character
  const loader = new GLTFLoader()
  loader.load(`assets/3d/${objToRender}/scene.gltf`, function (gltf) {
    character = gltf.scene.children[0]
    character.scale.set(1.2, 1.2,  0.7)
    character.position.set(0, -4, 0)
    obj = gltf.scene
    scene.add(gltf.scene)
    
  })
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(400, 400)
  document.getElementById('obj3d').appendChild(renderer.domElement)
  const topLight = new THREE.DirectionalLight(0xffffff, 1)
  topLight.position.set(500, 500, 500) // x, y, z
  topLight.castShadow = true
  scene.add(topLight)
  
  const ambientLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambientLight)
  
  camera.position.set(8, 0, 15);
  camera.lookAt(0, 0, 0)
  function animate() {
    requestAnimationFrame(animate)
    character.rotation.z += 0.002
    // camera.position.x = 30;
    renderer.render(scene, camera)
  }

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableZoom = false
  controls.maxPolarAngle = Math.PI / 2;
  controls.minPolarAngle = Math.PI / 2;
  // window.addEventListener("resize" , () => {
  //   camera.aspect = window.innerWidth / window.innerHeight
  //   camera.updateProjectionMatrix()
  //   renderer.setSize(window.innerWidth, window.innerHeight)
  // })
  animate()
}