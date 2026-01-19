import { React } from "react";
import "./globals.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Resources from "./components/Resources";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Resources />
      
    </main>
  );
}

