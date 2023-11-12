import Image from "next/image";
import React from "react";
import PortfolioItems from "./PortfolioItems";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.3, // 40%が見えた時点でトリガー
    triggerOnce: true, // 一度だけトリガー
  });

  const portfolioData = [
    { title: "3D-Portfolio", imageUrl: "/images/universe.jpg", link: "" },
    { title: "Accounting System", imageUrl: "/images/accounting-system.png", link: "" },
    { title: "Chat App", imageUrl: "/images/chat-app.jpeg", link: "" },
    { title: "Cafeteria App", imageUrl: "/images/cafeteria.jpg", link: "" },
    // 他のPortfolioItemsデータを追加
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: 0, y: 30 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <>
      <div className="container mx-auto mb-14 mt-80 flex w-full flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <motion.section
          className="w-full"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="mb-24 text-3xl font-bold">My Portfolio</div>
        </motion.section>
        <div className="w-full" ref={ref}>
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {portfolioData.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <PortfolioItems title={item.title} imageUrl={item.imageUrl} link={item.link} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
