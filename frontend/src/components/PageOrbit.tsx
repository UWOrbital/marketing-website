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
      <Canvas camera={{ position: [0, 2.5, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight
          position={[-5, -5, -5]}
          intensity={0.3}
          color="#3b82f6"
        />
        <ScrollCube progressRef={progress} />
        <Planets />
        <CubeStars />
      </Canvas>
    </div>
  );
}
