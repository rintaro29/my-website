import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

const SkillStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.5, // 50%が見えた時点でトリガー
    triggerOnce: true, // 一度だけトリガー
  });

  // 画像のパスを配列で定義
  const images = [
    "/skillStack/javascript.svg",
    "/skillStack/react.svg",
    "/skillStack/typescript-icon.svg",
    "/skillStack/nextjs-icon.svg",
    "/skillStack/tailwindcss-icon.svg",
    "/skillStack/flutter.svg",
    "/skillStack/figma.svg",
    "/skillStack/threejs.jpg",
    "/skillStack/nodejs-icon-alt.svg",
    "/skillStack/python.svg",
    "/skillStack/supabase-icon.svg",
  ];

  // 各アイテムのアニメーション定義
  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 30 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      <div
        ref={ref}
        className="container mx-auto mt-80 flex w-full flex-col items-center justify-between px-8 md:px-14 lg:px-24"
      >
        <motion.section
          className="w-full"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="mb-32 text-6xl font-bold">Skill Stack</div>
        </motion.section>
        <div className="w-full">
          <motion.div
            className="grid grid-cols-2 justify-items-center gap-16 md:grid-cols-4"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* 画像をマッピングして表示 */}
            {images.map((src, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Image src={src} alt="image" width={50} height={50} className="rounded-md" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SkillStack;
