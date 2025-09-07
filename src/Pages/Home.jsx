import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Home() {
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Hero onScrollClick={scrollToServices} />
      <div ref={servicesRef}>
        <Services />
      </div>
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}