import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_R = 2.5;

export function ScrollCube({
  progressRef,
}: {
  progressRef: { current: number };
}) {
  const pos = useRef<THREE.Group>(null);
  const model = useRef<THREE.Group>(null);
  const smooth = useRef(0);

  const { scene } = useGLTF("/satellite.glb");

  useFrame((_, delta) => {
    if (!pos.current || !model.current) return;
    smooth.current +=
      (progressRef.current - smooth.current) * Math.min(1, delta * 4);

    const a = smooth.current * Math.PI * 2;
    pos.current.position.x = Math.cos(a) * ORBIT_R;
    pos.current.position.z = -Math.sin(a) * ORBIT_R;
    model.current.rotation.y = -a;

    const t = Math.min(1, smooth.current / 0.2);
    const s = 1 + (1 - t) * 3;
    pos.current.scale.setScalar(s);
  });

  return (
    <group ref={pos}>
      <primitive ref={model} object={scene.clone()} rotation={[0.3, 0, 0]} />
    </group>
  );
}

useGLTF.preload("/satellite.glb");

const planets = [
  { r: 4.0, s: 0.04, c: "#94a3b8", sp: 0.15, o: 0 },
  { r: 4.5, s: 0.06, c: "#64748b", sp: -0.08, o: 2.1 },
  { r: 3.5, s: 0.03, c: "#475569", sp: 0.12, o: 4.3 },
  { r: 5.0, s: 0.08, c: "#94a3b8", sp: -0.05, o: 1.7 },
  { r: 3.2, s: 0.02, c: "#64748b", sp: 0.2, o: 3.8 },
];

export function Planets() {
  const refs = useRef<THREE.Mesh[]>([]);
  const angles = useRef(planets.map((p) => p.o));

  useFrame((_, delta) => {
    angles.current = angles.current.map((a, i) => a + delta * planets[i].sp);
    refs.current.forEach((m, i) => {
      if (!m) return;
      const a = angles.current[i];
      const p = planets[i];
      m.position.x = Math.cos(a) * p.r;
      m.position.z = -Math.sin(a) * p.r;
      m.rotation.x += delta * 0.3;
      m.rotation.y += delta * 0.5;
    });
  });

  return (
    <>
      {planets.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el!;
          }}
        >
          <sphereGeometry args={[p.s, 16, 16]} />
          <meshStandardMaterial color={p.c} metalness={0.3} roughness={0.5} />
        </mesh>
      ))}
    </>
  );
}

export function CubeStars() {
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 15;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.005;
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
