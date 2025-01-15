import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import * as THREE from "three";

type PlanetProps = {
  position: [number, number, number];
  size: number;
  color: string;
  rotationSpeed?: number;
};

function Planet({ position, size, color, rotationSpeed = 0.01 }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[size, 32, 32]}>
      <meshStandardMaterial
        color={color}
        metalness={0.4}
        roughness={0.7}
        envMapIntensity={0.5}
      />
    </Sphere>
  );
}

function Space3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      className="absolute inset-0 -z-10"
      style={{
        background: "linear-gradient(to bottom, #1a4a4a, #0a2a2a)",
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Main planet */}
      <Planet
        position={[0, 0, 0]}
        size={3}
        color="#4a8f8f"
        rotationSpeed={0.005}
      />

      {/* Smaller orbiting planets */}
      <Planet
        position={[-8, 2, -5]}
        size={1}
        color="#6ab4b4"
        rotationSpeed={0.02}
      />
      <Planet
        position={[7, -2, -3]}
        size={1.5}
        color="#2a6f6f"
        rotationSpeed={0.015}
      />

      {/* Background stars */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Add subtle fog for depth */}
      <fog attach="fog" args={["#0a2a2a", 15, 25]} />
    </Canvas>
  );
}

export default Space3DScene;
