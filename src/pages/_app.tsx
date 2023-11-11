import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn("bg-slate-100 dark:bg-black")}>
      <div className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="discord-clone-theme"
          // disableTransitionOnChange
        >
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </div>
  );
}
