import Image from "next/image";
import React from "react";

type PortfolioItemsProps = {
  title: string;
  imageUrl: string;
};

const PortfolioItems = ({ title, imageUrl }: PortfolioItemsProps) => {
  return (
    <div className="hover:text-blue-500">
      {title}
      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="z-10 h-56 w-full rounded-md object-cover hover:opacity-60 lg:h-60"
      />
    </div>
  );
};

export default PortfolioItems;
