import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import type { Loc } from "../../hooks/useLocation";

const R = 1.5;
const EARTH_URL =
  "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg";

function latLngToPos(
  lat: number,
  lng: number,
  r: number,
): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function Marker({
  lat,
  lng,
  color = "#3b82f6",
}: {
  lat: number;
  lng: number;
  color?: string;
}) {
  const pos = latLngToPos(lat, lng, R);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2) * 0.3;
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <mesh ref={ref} position={pos}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function MarkerRing({
  lat,
  lng,
  color = "#3b82f6",
}: {
  lat: number;
  lng: number;
  color?: string;
}) {
  const pos = latLngToPos(lat, lng, R);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const s = 1 + Math.sin(clock.elapsedTime * 2) * 0.5;
      ref.current.scale.setScalar(s);
      (ref.current.material as THREE.MeshBasicMaterial).opacity =
        0.6 - Math.sin(clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={pos}>
      <ringGeometry args={[0.08, 0.12, 24]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Earth({ waterloo, user }: { waterloo: Loc; user: Loc | null }) {
  const map = useLoader(THREE.TextureLoader, EARTH_URL);
  const ref = useRef<THREE.Mesh>(null);
  const init = useRef(false);

  if (!init.current && typeof window !== "undefined") {
    // rotate so Canada (~100°W) faces camera
    ref.current && (ref.current.rotation.y = 2.0);
    init.current = true;
  }

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[R, 48, 48]} />
      <meshPhongMaterial
        map={map}
        specular={new THREE.Color(0x333333)}
        shininess={5}
      />

      <mesh>
        <sphereGeometry args={[R * 1.008, 48, 48]} />
        <meshPhongMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      <Marker lat={waterloo.lat} lng={waterloo.lng} color="#3b82f6" />
      <MarkerRing lat={waterloo.lat} lng={waterloo.lng} color="#3b82f6" />

      {user && (
        <>
          <Marker lat={user.lat} lng={user.lng} color="#60a5fa" />
          <MarkerRing lat={user.lat} lng={user.lng} color="#60a5fa" />
        </>
      )}
    </mesh>
  );
}
