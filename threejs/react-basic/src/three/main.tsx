import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import TestCube from './components/TestCube'
import * as THREE from 'three'


const main = (): void => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer  = new THREE.WebGLRenderer()
  const controls = new OrbitControls(camera, renderer.domElement)

  camera.position.z = 2
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const testCube = TestCube()
  scene.add(testCube.reference)

  const animate = function(): void {
    requestAnimationFrame(animate)

    testCube.animate()

    controls.update()
    renderer.render(scene, camera)
  };

  animate();
}


export default main
