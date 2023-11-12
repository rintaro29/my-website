import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="  container mx-auto  mt-64 flex w-full  flex-col items-center justify-between px-8 md:px-14 lg:px-24">
        <section className=" mb-32  w-full">
          <div className="">
            <div className="flex items-center">
              <div className=" mr-6 text-3xl font-bold md:text-6xl lg:mr-24">Contact Me</div>

              <Link href="https://github.com/rintaro29?tab=repositories">
                <Image
                  src="/skillStack/github-icon.svg"
                  alt="image"
                  width={40}
                  height={40}
                  className="mx-2 rounded-full"
                />
              </Link>
              <Link href="https://twitter.com/9atdc">
                <Image src="/SNS/twitter.svg" alt="image" width={40} height={40} className=" mx-2 rounded  " />
              </Link>
              <Image src="/SNS/facebook.svg" alt="image" width={40} height={40} className="mx-2  rounded-full " />
            </div>

            <div className="lg: mt-16  gap-8  space-y-10 lg:gap-32">
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold  ">
                  お名前
                </label>
                <input type="text" className="w-1/2 border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold  ">
                  メールアドレス
                </label>
                <input type="text" className=" w-1/2 border-inputBorder bg-input p-4" />
              </div>
              <div>
                <label htmlFor="" className="mb-2 block text-xl font-bold ">
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
