import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from 'react-three-fiber';
import { useRef, Suspense, useEffect } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';
import Background from './components/Background';
import Box from './components/Box';
import Blub from './components/Blub';
import Floor from './components/Floor';

import Orbit from './components/Orbit';
import Dragable from './components/Dragable';
import { Physics } from '@react-three/cannon';
import Model from './components/Model';
import BoundingBox from './components/BoundingBox';

extend({ OrbitControls });

function App() {
  const handleClick = (e) => {
    if (!window.activeMesh) return;
    window.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  };
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <div style={{ position: 'absolute', zIndex: 1 }}>
        <div
          style={{ background: 'blue', height: 50, width: 50 }}
          onClick={handleClick}
        ></div>
        <div
          style={{ background: 'yellow', height: 50, width: 50 }}
          onClick={handleClick}
        ></div>
        <div
          style={{ background: 'red', height: 50, width: 50 }}
          onClick={handleClick}
        ></div>
      </div>
      <Canvas
        shadows
        style={{ backgroundColor: '#200553' }}
        camera={{ position: [7, 7, 7] }}
      >
        {/* <fog attach="fog" args={['white', 1, 30]} /> */}
        <ambientLight intensity={0.1} />

        <Orbit />

        <axesHelper args={[5]} />
        <Physics>
          <Blub position={[0, 4, 0]} />
          <Suspense fallback={null}>
            <Dragable transformGroup>
              <BoundingBox
                visible={false}
                position={[3, 2, 0]}
                dims={[2.4, 1.8, 5.2]}
                offset={[0, 0.08, 0]}
              >
                <Model
                  path="/tesla_model_3/scene.gltf"
                  scale={new Array(3).fill(0.01)}
                  // position={[3, 0.75, 0]}
                />
              </BoundingBox>
            </Dragable>
            <Dragable transformGroup>
              <BoundingBox
                visible={false}
                position={[-3, 2, 0]}
                dims={[2.4, 1.7, 5.2]}
                offset={[0, 0.08, 0]}
              >
                <Model
                  path="/tesla_black/scene.gltf"
                  scale={new Array(3).fill(0.01)}
                  // position={[-3, 0.75, 0]}
                />
              </BoundingBox>
            </Dragable>
          </Suspense>
          {/* <Suspense fallback={null}>
              <Box position={[-4, 1, 0]} />
            </Suspense>
            <Suspense fallback={null}>
              <Box position={[4, 1, 0]} />
            </Suspense> */}

          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Floor position={[0, -0.5, 0]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
