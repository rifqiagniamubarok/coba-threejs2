import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import * as THREE from 'three';

const Box = (props) => {
  const [ref, api] = useBox(() => ({ mass: 1, ...props }));
  // const ref = useRef(null);
  // console.log(ref);
  const texture = useLoader(THREE.TextureLoader, '/wood.jpg');
  // useFrame((state) => {
  //   ref.current.rotation.y -= 0.01;
  //   ref.current.rotation.x += 0.01;
  // });
  const handlePointerDown = (e) => {
    e.object.active = true;
    if (window.activeMesh) {
      scaleDown(window.activeMesh);
      window.activeMesh.active = false;
    }
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e) => {
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  const scaleDown = (object) => {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  };

  return (
    <mesh
      ref={ref}
      api={api}
      {...props}
      castShadow
      receiveShadow
      onPointerDown={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* <BoxBufferGeometry /> */}
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial
        // color="white"
        // opacity={0.7}
        // metalness={1}
        // transparent
        // roughness={0}
        // clearcoat={1}
        // transmission={0.5}
        // reflectivity={1}
        // side={THREE.DoubleSide}
        map={texture}
      />
    </mesh>
  );
};

export default Box;

// useEffect(() => {
//   document.onkeydown = function (event) {
//     // const timeline = gsap.timeline();
//     // if (event.keyCode === 37) {
//     //   gsap.to(ref.current.position, {
//     //     x: ref.current.position.x + 0.1,
//     //     duration: 0.5,
//     //     ease: 'power1',
//     //   });
//     // }
//     const speed = 2;
//     const duration = 0.5;
//     switch (event.keyCode) {
//       case 37:
//         gsap.to(ref.current.position, {
//           x: ref.current.position.x + speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         gsap.to(ref.current.rotation, {
//           z: ref.current.rotation.z + speed,
//           duration: duration,
//           ease: 'linear',
//         });

//         break;
//       case 38:
//         gsap.to(ref.current.position, {
//           z: ref.current.position.z + speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         gsap.to(ref.current.rotation, {
//           x: ref.current.rotation.x + speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         break;
//       case 39:
//         gsap.to(ref.current.position, {
//           x: ref.current.position.x - speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         gsap.to(ref.current.rotation, {
//           z: ref.current.rotation.z - speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         break;
//       case 40:
//         gsap.to(ref.current.position, {
//           z: ref.current.position.z - speed,
//           duration: duration,
//           ease: 'linear',
//         });
//         gsap.to(ref.current.rotation, {
//           x: ref.current.rotation.x - speed,
//           duration: duration,
//           ease: 'linear',
//         });

//         break;
//       case 32:
//         const timeline = gsap.timeline({ paused: true });
//         timeline.to(ref.current.position, {
//           y: ref.current.position.y + 2,
//           duration: 1,
//           ease: 'power1',
//         });
//         timeline.to(ref.current.position, {
//           y: 1,
//           duration: 2,
//           ease: 'bounce.out',
//         });
//         timeline.play();
//         break;
//     }
//   };
// }, [document, ref.current]);
