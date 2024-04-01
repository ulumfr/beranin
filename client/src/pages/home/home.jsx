import React, { useEffect } from "react";
import HeroSection from "./hero";
import ConsultSection from "./consult";

const HomePage = () => {
  useEffect(() => {
    document.title = "BeranIn | Home";
  });

  return (
    <>
      <HeroSection />
      <ConsultSection />
    </>
  );
};

export default HomePage;
    