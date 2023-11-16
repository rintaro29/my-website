import { Inter } from "next/font/google";

import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import SkillStack from "@/components/SkillStack";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import StarsCanvas from "@/components/canvas/Stars";
import Contact2 from "@/components/Contact2";

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
      <div className="relative z-0">
        <StarsCanvas />
        <div id="Portfolio">
          <Portfolio />
        </div>
        <div id="SkillStack">
          <SkillStack />
        </div>
        <div id="Contact" className="mb-4">
          <Contact2 />
        </div>
      </div>
      <Contact />
    </div>
  );
}
