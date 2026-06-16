import type { AppProps } from "next/app";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}
