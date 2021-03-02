import { Component } from 'react'
import * as THREE from 'three'
import main from './three/main'

class App extends Component {

  // ThreeJS Initialization
  componentDidMount() {
    main()
  }

  render() {
    return null
  }
}

export default App
