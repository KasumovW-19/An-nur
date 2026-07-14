import type { AppProps } from "next/app";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "@/styles/globals.scss";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${manrope.variable} ${cormorant.variable} ${manrope.className}`}
    >
      <Component {...pageProps} />
    </div>
  );
}