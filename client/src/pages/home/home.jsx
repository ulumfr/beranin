import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "BeranIn | Home";
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Ini Home
    </div>
  );
};

export default HomePage;
