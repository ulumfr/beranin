import React, { useEffect } from "react";
import HeroSection from "./hero";
import ConsultSection from "./consult";
import NewsSection from "./news";

const HomePage = () => {
  useEffect(() => {
    document.title = "BeranIn | Home";
  });

  return (
    <>
      <HeroSection />
      <ConsultSection />
      <NewsSection />
    </>
  );
};

export default HomePage;
