import { Sky, useTexture, OrbitControls } from "@react-three/drei";

export default function AirCombat() {
  const planeTexture = useTexture("./textures/plane.jpg");

  return (
    <>
      <OrbitControls />

      <Sky sunPosition={[1, 2, 3]} />

      <directionalLight position={[1, 2, 3]} intensity={0.8} />
      {/* <ambientLight intensity={ 0.5 } /> */}

      <mesh rotation-z={-0.5 * Math.PI}>
        <planeGeometry args={[28.2, 48.6]} />
        <meshStandardMaterial map={planeTexture} />
      </mesh>
    </>
  );
}
