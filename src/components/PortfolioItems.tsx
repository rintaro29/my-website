import Image from "next/image";
import Link from "next/link";
import React from "react";

type PortfolioItemsProps = {
  title: string;
  imageUrl: string;
  link: string;
};

const PortfolioItems = ({ title, imageUrl, link }: PortfolioItemsProps) => {
  return (
    <div className="hover:text-blue-500">
      <div className="mb-3 text-xl font-bold"> {title}</div>

      <Image
        src={imageUrl}
        alt={title}
        width={200}
        height={200}
        className="z-10 h-40 w-full rounded-md object-cover hover:opacity-60 lg:h-60"
      />
      <Link href={link}></Link>
    </div>
  );
};

export default PortfolioItems;
