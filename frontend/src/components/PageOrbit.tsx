import { useRef, useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { ScrollCube, CubeStars, Planets } from "./3d/ScrollCube";

export function PageOrbit() {
  const progress = useRef(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      progress.current = v;
    });
    return unsub;
  }, [scrollYProgress]);

  const [cam] = useState(() => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1024;
    const narrow = w < 640;
    return { pos: narrow ? [0, 1, 3.5] : [0, 1.5, 4], fov: narrow ? 50 : 40 };
  });

  return (
    <div className="fixed inset-0 -z-0">
      <Canvas
        camera={{ position: cam.pos as [number, number, number], fov: cam.fov }}
      >
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
        <ScrollCube progressRef={progress} />
        <Planets />
        <CubeStars />
      </Canvas>
    </div>
  );
}
