import Image from "next/image";
import React from "react";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  return (
    <>
      <div className=" container mx-auto mb-14 mt-24 flex   w-full flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <section className="w-full">
          <div className="mb-10 text-6xl font-bold">My Portfolio</div>
        </section>

        <div className="grid gap-6  md:grid-cols-2">
          <PortfolioItems title="3D-portfolio" imageUrl="/images/universe.jpg" />
          <PortfolioItems title="Accounting system" imageUrl="/images/accounting-system.png" />
          <PortfolioItems title="Chat app" imageUrl="/images/chat-app.jpeg" />
          <PortfolioItems title="Cafeteria app" imageUrl="/images/cafeteria.jpg" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
