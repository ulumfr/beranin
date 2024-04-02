import React, { useEffect } from "react";
import HeroSection from "./hero";
import ConsultSection from "./consult";
import NewsSection from "./news";
import ContactSection from "./contact";
import AboutSection from "./about";

const HomePage = () => {
  useEffect(() => {
    document.title = "BeranIn | Home";
  });

  return (
    <>
      <HeroSection />
      <ConsultSection />
      <NewsSection />
      <ContactSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
