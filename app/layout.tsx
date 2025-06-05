import type { Metadata } from "next";
import {Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import HeroSection from './components/heroSection';
import AboutSection from './components/aboutSection';
import ProjectSection from "./components/projectSection";
import Footer from "./components/footer";

const urbanist = Urbanist({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "AbDev | Landing Page ",
  description: "Landing page made by AbDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <Navbar/ >
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <Footer />
        {children}
      </body>
    </html>
  );
}
