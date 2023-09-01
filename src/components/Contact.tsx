import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="  container mx-auto  mt-64 flex w-full  flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <section className=" mb-32  w-full">
          <div className="">
            <div className="flex">
              <div className=" mr-12 text-6xl font-bold">Contact Me</div>

              <Image src="/SNS/twitter.svg" alt="image" width={40} height={40} className="mx-2  rounded-full" />
              <Image src="/SNS/instagram.png" alt="image" width={55} height={55} className="z-10  mx-2 rounded-full " />
              <Image src="/SNS/facebook.svg" alt="image" width={40} height={40} className="mx-2  rounded-full " />
            </div>

            <div className="lg: mt-16  gap-8  space-y-10 lg:gap-32">
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold text-white ">
                  お名前
                </label>
                <input type="text" className="w-1/2 border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold text-white ">
                  メールアドレス
                </label>
                <input type="text" className=" w-1/2 border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold text-white">
                  メッセージ
                </label>
                <textarea className="h-32   w-2/3 resize-none overflow-hidden border-inputBorder bg-input  text-xl " />
              </div>
              <button className="  mt-10  w-32 rounded bg-theme p-2 font-bold transition-all duration-300 hover:bg-pink-300">
                <p> Submit</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
