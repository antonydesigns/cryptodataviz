"use client";

import React, { useRef } from "react";
import { Canvas, Vector3, useFrame, Color } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

type boxGeometryArgType =
  | [
      width?: number | undefined,
      height?: number | undefined,
      depth?: number | undefined,
      widthSegments?: number | undefined,
      heightSegments?: number | undefined,
      depthSegments?: number | undefined
    ]
  | undefined;

type dodecahedronGeometryArgType =
  | [radius?: number | undefined, detail?: number | undefined]
  | undefined;

export default function Playground() {
  return (
    <>
      <div className="h-screen w-full">
        <Canvas>
          <directionalLight position={[0, 2, 0]} />
          <ambientLight />
          <Dodecahedron
            position={[2, -1.2, 0]}
            color={"lightgreen"}
            rotation={[0, 0.02, 0]}
            args={[4, 2]}
            wireframe={true}
          />

          {/*   <OrbitControls enableZoom={false} enableRotate={false} />
           */}
          {/* <Cube
            position={[0, 0, 0]}
            color={"lightgreen"}
            rotation={[0.1, 0.1, 0.1]}
            size={[3.5, 3.5, 3.5]}
          /> */}
        </Canvas>
      </div>
    </>
  );
}

function Dodecahedron({
  position,
  args,
  color,
  rotation = [0, 0, 0],
  wireframe = false,
}: {
  position?: Vector3 | undefined;
  args?: dodecahedronGeometryArgType;
  color?: Color | undefined;
  rotation?: [x: number, y: number, z: number] | undefined;
  wireframe: boolean;
}) {
  const ref = useRef<any>();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * rotation[0];
    ref.current.rotation.y += delta * rotation[1];
    ref.current.rotation.z += delta * rotation[2];
  });
  return (
    <mesh position={position} ref={ref}>
      <dodecahedronGeometry args={args} />
      <meshStandardMaterial color={color} wireframe={wireframe} />
    </mesh>
  );
}

function Cube({
  position,
  size,
  color,
  rotation = [0, 0, 0],
}: {
  position?: Vector3 | undefined;
  size?: boxGeometryArgType;
  color?: Color | undefined;
  rotation?: [x: number, y: number, z: number] | undefined;
}) {
  const ref = useRef<any>();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * rotation[0];
    ref.current.rotation.y += delta * rotation[1];
    ref.current.rotation.z += delta * rotation[2];
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
