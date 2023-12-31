import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "@/components/canvas/Earth";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "tommy",
          from_email: form.email,
          to_email: "tommy9201@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_USER_ID!
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          // 送信後にフォームをリセット
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`mt-40 flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] rounded-2xl bg-blue-950 p-8">
        <>
          <div className="flex items-center">
            <div className=" mr-6 text-2xl font-bold  text-pink-500 md:text-3xl lg:mr-24">Contact Me</div>

            <Link href="https://github.com/rintaro29">
              <Image
                src="/skillStack/github-original.svg"
                alt="image"
                width={40}
                height={40}
                className="mx-2 rounded-full bg-slate-300"
              />
            </Link>
            <Link href="https://twitter.com/9atdc">
              <Image src="/SNS/twitter.svg" alt="image" width={40} height={40} className=" mx-2 rounded  " />
            </Link>
            <Image src="/SNS/facebook.svg" alt="image" width={40} height={40} className="mx-2  rounded-full " />
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="mb-4 text-xl font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none  placeholder:text-gray-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4  text-xl font-bold text-white">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-gray-500"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4  text-xl font-bold text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-gray-500"
              />
            </label>

            <button
              type="submit"
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="h-[350px] md:h-[450px] xl:h-auto xl:flex-1">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
