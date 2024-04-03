import React, {useEffect} from "react";
import ContentSection from "./content"
import TeamSection from "./team"

const AboutPage = () => {
  useEffect(() => {
    document.title = "BeranIn | About";
  });

  return (
    <>
      <ContentSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;