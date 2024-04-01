import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="">
      <Container>
        <Row>
          <Col md={4}>
            <NavLink to="/">
              <img src={logo} alt="logo-beranin" draggable="false" />
            </NavLink>
            <div
              className="my-3"
              style={{
                width: "238px",
                height: "7px",
                backgroundColor: "var(--primary-color)",
              }}
            />
            <p
              className="fw-medium"
              style={{
                color: "var(--primary-color)",
                fontSize: "var(--h5-font-size)",
              }}
            >
              "Langkah-langkah Praktis, Solusi Efektif: BeranIn Untuk Mencegah
              Bullying."
            </p>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column align-items-center gap-2 mt-5"
          >
            <NavLink
              to="/"
              style={{ color: "var(--primary-color)", textDecoration: "none" }}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/news"
              style={{ color: "var(--primary-color)", textDecoration: "none" }}
            >
              <span>News</span>
            </NavLink>
            <NavLink
              to="/about"
              style={{ color: "var(--primary-color)", textDecoration: "none" }}
            >
              <span>About Us</span>
            </NavLink>
          </Col>
          <Col md={4} className="d-flex flex-column align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <span className="fs-4 fw-bold my-2 mt-4">Ikuti kami</span>
              <div className="d-flex justify-content-center align-items-center mt-2 gap-3">
                <a href="https://www.linkedin.com/in/beranin/">
                  <i className="bx bxl-linkedin custom-footer fs-2"></i>
                </a>
                <a href="https://www.instagram.com/bearnin/">
                  <i className="bx bxl-instagram custom-footer fs-1"></i>
                </a>
                <a href="https://youtube.com/beranin">
                  <i className="bx bxl-youtube custom-footer fs-1"></i>
                </a>
                <a href="https://twitter.com/beranin">
                  <i class="bx bxl-twitter custom-footer fs-1"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex flex-column align-items-center">
          <div
            className="my-4"
            style={{
              width: "100%",
              height: "3px",
              backgroundColor: "var(--primary-color)",
            }}
          />
          <div>
            <p> &copy; Copyright {year} | BeranIn - from Aksara Padma</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
