import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObjects = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.children.forEach((child, i) => {
        const t = state.clock.getElapsedTime() + i;
        child.position.y = Math.sin(t) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => {
        const position = new THREE.Vector3(
          Math.random() * 10 - 5,
          Math.random() * 10 - 5,
          Math.random() * 10 - 5
        );
        return Math.random() > 0.5 ? (
          <Sphere key={i} position={position} scale={0.1}>
            <meshStandardMaterial color={new THREE.Color().setHSL(Math.random(), 0.8, 0.6)} />
          </Sphere>
        ) : (
          <Box key={i} position={position} scale={0.2}>
            <meshStandardMaterial color={new THREE.Color().setHSL(Math.random(), 0.8, 0.6)} />
          </Box>
        );
      })}
    </group>
  );
};

const Scene3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingObjects />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Scene3D;