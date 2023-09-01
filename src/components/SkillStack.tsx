import Image from "next/image";
import React from "react";

const SkillStack = () => {
  return (
    <>
      <div className="  container mx-auto  mt-80 flex  w-full flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <section className="w-full">
          <div className="mb-32 text-6xl font-bold">Skill Stack</div>
        </section>
        <div className=" w-full ">
          <div className="grid grid-cols-2  justify-items-center gap-16 md:grid-cols-4">
            <Image
              src="/SkillStack/javascript.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/react.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/typescript-icon.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/nextjs-icon.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/tailwindcss-icon.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/flutter.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />{" "}
            <Image
              src="/SkillStack/figma.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/threejs.jpg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/nodejs-icon-alt.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/python.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
            <Image
              src="/SkillStack/supabase-icon.svg"
              alt="image"
              width={50}
              height={50}
              className="  rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillStack;
