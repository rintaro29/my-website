import React from "react";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="Home" className=" container mx-auto mb-10    w-full justify-between ">
      <div className="transparent-bg flex w-full items-center">
        {/* 名前とアイコン */}
        <div className=" flex flex-col  flex-wrap md:my-20  md:px-14 lg:ml-20 lg:px-24">
          <div className="mb-8 mr-20 flex ">
            <Image src="/images/my-icon.jpg" alt="image" width={200} height={200} className="  mr-6 rounded-full" />
            <div>
              <p className=" text-2xl font-bold md:text-left md:text-4xl lg:text-5xl"> Rintaro</p>
              <p className="my-1 text-base">Born in Oita, Japan </p>
            </div>
          </div>
          <p className="my-1 text-2xl">Ritsumeikan University 3th grade </p>
          <p> Faculty of Information Science and Engineering</p>
        </div>
        {/* プロフィール */}
        <div className="z-20  hidden  bg-slate-500 p-6 pr-10 md:block">
          <p className="my-1 text-center  text-2xl font-bold md:text-left md:text-4xl lg:text-5xl">Profile</p>
          <p>2021.4. Enroll at Ritsumeikan University</p>
          <br />
          <p className="text-base  md:text-xl">Belong to</p>
          <p>・Ritsumeikan Computer Club</p>
          <p>・Google Developer Student Ritsumeikan</p>
          <p>・Tech Uni</p>
          <p>・Into The Green</p>

          <button className="z-10 mt-2 w-40 rounded bg-theme p-2 font-bold transition-all duration-300 hover:bg-pink-300">
            <ReadMoreIcon className="mr-2" />
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
