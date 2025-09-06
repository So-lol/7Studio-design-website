import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */  }
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}