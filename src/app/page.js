import { React } from "react";
import "./globals.css";

import Hero from "./sections/home/Hero";
import About from "./sections/home/About";
import Services from "./sections/home/Services";
import Projects from "./sections/home/Projects";
import Resources from "./sections/home/Resources";
import Contact from "./sections/home/Contact";
import Footer from "./sections/home/Footer";

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
