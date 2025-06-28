
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface PythonCubeProps {
  position?: [number, number, number];
  scale?: number;
}

export const PythonCube = ({ position = [0, 0, 0], scale = 1 }: PythonCubeProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#3776ab" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.1}
      />
      <mesh position={[0, 0, 0.51]}>
        <planeGeometry args={[0.8, 0.8]} />
        <meshBasicMaterial color="#ffd43b" opacity={0.9} transparent />
      </mesh>
    </mesh>
  );
};
