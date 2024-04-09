import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import ImgAbout from "../../assets/img/about2.png";

const AboutSection = () => {
  return (
    <>
      <div>
        <section
          className="py-2"
          style={{
            color: "var(--primary-color)",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Container>
            <div className="pt-5 d-flex flex-column">
              <Row className="py-4">
                <Col md={6}>
                  <img
                    src={ImgAbout}
                    alt="img-about"
                    className="w-75"
                    style={{
                      borderRadius: "0px 30px 180px 50px",
                      boxShadow: "4px 6px 6px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  />
                </Col>
                <Col md={5}>
                  <div className="pt-5 d-flex flex-column">
                    <span className="fs-4 fw-medium">About Us</span>
                    <span className="fs-3 fw-bold">
                      Tentang BeranIn, website yang memberikan pelaporan online
                      dan aman
                    </span>
                    <div className="d-flex gap-3 text-center my-4">
                      <span className="fs-5 fw-medium">
                        Pengertian <br />
                        Bullying
                      </span>
                      <div className="garis-kecil" />
                      <span className="fs-5 fw-medium">
                        Visi-Misi <br /> BeranIn
                      </span>
                      <div className="garis-kecil" />
                      <span className="fs-5 fw-medium">
                        Team <br />
                        Work
                      </span>
                    </div>
                  </div>
                  <motion.button
                    initial={{ y: 100, scale: 0.5 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    className="custom-button-consul"
                  >
                    <Link
                      to="/about"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Selengkapnya
                    </Link>
                  </motion.button>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
      <div
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "var(--tertiary-color)",
        }}
      />
    </>
  );
};

export default AboutSection;
