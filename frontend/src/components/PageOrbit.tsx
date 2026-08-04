import { useRef, useEffect, useMemo } from "react";
import { useScroll } from "framer-motion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ScrollCube, CubeStars, Planets } from "./3d/ScrollCube";

function AspectFix() {
  const { gl, camera } = useThree();
  const cam = camera as THREE.PerspectiveCamera;

  useFrame(() => {
    const w = gl.domElement.clientWidth;
    const h = gl.domElement.clientHeight;
    if (w > 0 && h > 0) {
      const a = w / h;
      if (Math.abs(cam.aspect - a) > 0.001) {
        cam.aspect = a;
        cam.updateProjectionMatrix();
      }
    }
  });

  return null;
}

export function PageOrbit({ satellite = true }: { satellite?: boolean }) {
  const progress = useRef(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      progress.current = v;
    });
    return unsub;
  }, [scrollYProgress]);

  const cam = useMemo(() => {
    const narrow = typeof window !== "undefined" && window.innerWidth < 640;
    return {
      position: [0, 1.5, narrow ? 6 : 4] as [number, number, number],
      fov: 40,
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 -z-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Canvas dpr={[1, 2]} camera={cam} gl={{ antialias: true }}>
        <AspectFix />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight
          position={[-3, 2, -4]}
          intensity={1}
          color="#3b82f6"
        />
        <directionalLight
          position={[0, -3, -2]}
          intensity={0.5}
          color="#60a5fa"
        />
        {satellite && <ScrollCube progressRef={progress} />}
        <Planets />
        <CubeStars />
      </Canvas>
    </div>
  );
}
