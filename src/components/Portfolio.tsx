import Image from "next/image";
import React from "react";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  return (
    <>
      <div className=" container mx-auto mb-14 mt-80 flex   w-full flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <section className="w-full">
          <div className="mb-32 text-6xl font-bold">My Portfolio</div>
        </section>

        <div className="grid gap-6  md:grid-cols-2">
          <PortfolioItems title="3D-Portfolio" imageUrl="/images/universe.jpg" link="" />
          <PortfolioItems title="Accounting System" imageUrl="/images/accounting-system.png" link="" />
          <PortfolioItems title="Chat App" imageUrl="/images/chat-app.jpeg" link="" />
          <PortfolioItems title="Cafeteria App" imageUrl="/images/cafeteria.jpg" link="" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
