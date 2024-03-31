import React, { useEffect } from "react";

const NewsPage = () => {
  useEffect(() => {
    document.title = "BeranIn | News";
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      Ini News
    </div>
  );
};

export default NewsPage;
