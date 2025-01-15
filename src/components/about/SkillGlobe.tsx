import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface SkillNode {
  name: string;
  position: [number, number, number];
}

const SkillNode = ({ name, position }: SkillNode) => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.lookAt(0, 0, 5);
      textRef.current.position.y +=
        Math.sin(clock.getElapsedTime() + position[0]) * 0.002;
    }
  });

  return (
    <group position={position}>
      <Sphere args={[0.2, 16, 16]}>
        <meshStandardMaterial color="#1a4a4a" />
      </Sphere>
      <Text
        ref={textRef}
        position={[0, 0.4, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};

interface SkillGlobeProps {
  skills: Array<{ name: string; level: number }>;
}

const SkillGlobe = ({ skills }: SkillGlobeProps) => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  const generatePosition = (
    index: number,
    total: number,
  ): [number, number, number] => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    const radius = 4;

    return [
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ];
  };

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      className="h-[400px] rounded-lg"
      style={{ background: "linear-gradient(to bottom, #1a4a4a, #0a2a2a)" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <group ref={groupRef}>
        {skills.map((skill, index) => (
          <SkillNode
            key={skill.name}
            name={skill.name}
            position={generatePosition(index, skills.length)}
          />
        ))}
      </group>

      <fog attach="fog" args={["#0a2a2a", 8, 15]} />
    </Canvas>
  );
};

export default SkillGlobe;
