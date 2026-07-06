import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Cosmic Hero Scene:
 *  - Deep starfield backdrop
 *  - Central glowing AI "node" (icosahedron with wireframe)
 *  - Orbiting satellite spheres (planets)
 *  - Subtle mouse parallax
 */

function AINode({ mouse }) {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.08;
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.25;
      wireRef.current.rotation.z += delta * 0.05;
    }
    // subtle mouse parallax
    const target = new THREE.Vector3(mouse.current.x * 0.3, mouse.current.y * 0.25, 0);
    meshRef.current.position.lerp(target, 0.03);
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
      <mesh ref={wireRef} scale={1.35}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh scale={1.7}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.04} />
      </mesh>
    </group>
  );
}

function OrbitPlanet({ radius, speed, size, color, tilt = 0, offset = 0 }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * tilt;
    ref.current.rotation.y += 0.01;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function DustField({ count = 400 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, [count]);

  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#7DD3FC" transparent opacity={0.55} />
    </points>
  );
}

export default function CosmicScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouse.current.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.current.y = -((e.clientY / innerHeight) * 2 - 1);
  };

  return (
    <div className="hero-canvas" onMouseMove={handleMove}>
      <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }} dpr={[1, 2]}>
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 4, 6]} intensity={1.4} color="#00E5FF" />
        <pointLight position={[-6, -4, -3]} intensity={0.9} color="#FFB800" />

        <Stars radius={80} depth={40} count={2600} factor={4} saturation={0} fade speed={0.6} />
        <DustField />

        <AINode mouse={mouse} />

        <OrbitPlanet radius={2.6} speed={0.35} size={0.22} color="#FFB800" tilt={0.4} />
        <OrbitPlanet radius={3.4} speed={0.22} size={0.16} color="#F472B6" tilt={-0.6} offset={2} />
        <OrbitPlanet radius={4.2} speed={0.15} size={0.28} color="#7DD3FC" tilt={0.3} offset={4} />
      </Canvas>
    </div>
  );
}
