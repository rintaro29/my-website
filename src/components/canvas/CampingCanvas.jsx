import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Camping = ({ isMobile }) => {
  const computer = useGLTF("./3d-model/scene.gltf");

  // hemisphereLightは半球状のライト
  // pointLightはシーン全体を照らす天候限

  return (
    <mesh>
      {/*メッシュの定義　 intensityは強度 */}
      <directionalLight position={[0, 20, 10]} intensity={2.0} />
      <ambientLight intensity={0.7} />

      <spotLight position={[-20, 50, 10]} angle={0.12} intensity={1} />
      <pointLight intensity={1.0} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.8 : 1.0}
        position={isMobile ? [0, -3, -2.2] : [-1, 1.0, -0.1]}
        rotation={[0, (Math.PI * 9) / 5, 0]}
      />
    </mesh>
  );
};

const CampingCanvas = () => {
  // デバイスがスマホサイズ化を検出
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    //スマホサイズ(500p以下)になったらtrue
    setIsMobile(mediaQuery.matches);

    // スマホサイズになったかどうか
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // メディアクエリに変化があったらhandleMediaQueryChangeをコールバック関数として実行
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [0, 3, 5],
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* 3Dモデルが読み込まれるまでCanvasLoaderを表示 */}
      <Suspense fallback={<CanvasLoader />}>
        {/* マウスによるコントロール */}
        {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} minPolarAngle={Math.PI / 2} /> */}
        <Camping isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CampingCanvas;
