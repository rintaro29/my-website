import { Inter } from "next/font/google";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SkillStack from "@/components/SkillStack";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div id="" className="">
      <div className="relative z-20">
        <Header />
      </div>
      <div className="  ">
        <Hero />
      </div>
      <div id="Portfolio">
        <Portfolio />
      </div>
      <div id="SkillStack">
        <SkillStack />
      </div>
      <Contact />
      <div id="Contact"></div>
    </div>
  );
}
