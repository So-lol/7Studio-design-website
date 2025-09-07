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
      <div id="home">
        <Hero onScrollClick={scrollToServices} />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );

}