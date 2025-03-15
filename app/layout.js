import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ClipLink",
  description: "Shorten, Secure, and Simplify Your URLs with Ease!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className=" bg-amber-700 text-white min-h-[100vh]">
        <Navbar/>
        {children}
        </div>
      </body>

    </html>
  );
}
