import { React } from "react";
import "./globals.css";

import Hero from "@/app/sections/home/Hero";
import About from "@/app/sections/home/About";
import Services from "@/app/sections/home/Services";
import Projects from "@/app/sections/home/Projects";
import Resources from "@/app/sections/home/Resources";
import Contact from "@/app/sections/home/Contact";
import Footer from "@/app/sections/home/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
