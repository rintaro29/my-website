import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" w-full  bg-black  px-1 text-white">
      <div className="">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
