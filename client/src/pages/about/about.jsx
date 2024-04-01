import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    document.title = "BeranIn | About";
  });
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Ini About apa
    </div>
  );
};

export default AboutPage;
