import React from "react";

const CardNews = ({ foto, title, desc, cat }) => {
  return (
    <div className="custom-card-news">
      <img src={foto} alt="foto" style={{ borderRadius: "20px" }} />
      <div className="custom-latest">
        <div className="custom-title-card d-flex justify-content-center align-items-center fw-semibold">
          {cat}
        </div>
        <div className="d-flex flex-column mt-4 mx-3">
          <span
            className="fw-bold"
            style={{
              color: "var(--text-color)",
              fontSize: "var(--h4-font-size)",
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: "var(--h6-font-size)" }}>{desc}</span>
          <a href="/" className="mt-2" style={{ color: "var(--text-color)" }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
