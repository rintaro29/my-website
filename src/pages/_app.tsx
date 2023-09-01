import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" bg-main px-1 text-white">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
