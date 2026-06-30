import { useRef, useEffect } from "react";
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

  return (
    <div className="fixed inset-0 -z-0">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 40 }}>
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
