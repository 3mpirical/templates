import * as THREE from 'three'
import ThreeComponent from '../interfaces/ThreeComponent'

const TestCube = (): ThreeComponent => {
  const geometry = new THREE.BoxGeometry()
  const material= new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
  const cube = new THREE.Mesh(geometry, material)
  
  return <ThreeComponent>{
    reference: cube,
    animate: (): void => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    }
  }
}

export default TestCube
