import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="Home"
      className=" container mx-auto mt-16 flex  w-full items-center justify-between px-8 md:px-14 lg:px-24"
    >
      <div className="flex flex-wrap md:flex-nowrap">
        <div className=" flex flex-wrap justify-center md:my-36 lg:ml-20">
          <h1 className="text-center text-5xl font-bold md:text-left md:text-6xl lg:text-7xl">
            Hi! <br />
            I am from Oita <br />
            Hot Spring is famous
          </h1>
          <button className="mt-10 rounded bg-theme p-4 font-bold transition-all duration-300 hover:bg-pink-300">
            <ReadMoreIcon className="mr-2" />
            Read more
          </button>
        </div>
        <Image
          src="/images/hot-spring1.jpg"
          alt="image"
          width={400}
          height={400}
          className="right-6  mx-auto  mt-3  w-3/5 md:absolute md:mt-0  md:w-2/5 lg:right-52"
        />
      </div>
    </div>
  );
};

export default Hero;
