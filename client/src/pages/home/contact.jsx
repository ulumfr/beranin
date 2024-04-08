import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div>
      <section className="py-2" style={{ color: "var(--primary-color)" }}>
        <Container>
          <div className="pt-5 d-flex flex-column">
            <span className="fs-4 fw-medium">Contact Us</span>
            <span className="fs-3 fw-bold">
              Kamu Dapat Menghubungi kami setiap saat
            </span>

            <Row className="pt-5">
              <Col md={8}>
                <Row>
                  <Col md={6}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-3 border-0"
                        id="name"
                        placeholder="Enter Name"
                        name="name"
                        style={{
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                          borderRadius: "15px",
                          padding: "12px 21px",
                          background: "var(--secondary-color)",
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="form-control rounded-3 border-0"
                        id="email"
                        placeholder="Enter Email"
                        name="email"
                        style={{
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                          borderRadius: "15px",
                          padding: "12px 21px",
                          background: "var(--secondary-color)",
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 border-0"
                    id="subject"
                    placeholder="Enter Subject"
                    name="subject"
                    style={{
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      borderRadius: "15px",
                      padding: "12px 21px",
                      background: "var(--secondary-color)",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Your Message *
                  </label>
                  <textarea
                    className="form-control rounded-3 border-0"
                    placeholder="Enter Message"
                    id="message"
                    rows="5"
                    name="message"
                    style={{
                      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                      borderRadius: "15px",
                      padding: "12px 21px",
                      background: "var(--secondary-color)",
                    }}
                  ></textarea>
                </div>
                <motion.button
                  initial={{ y: 100, scale: 0.5 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  className="custom-button-consul mb-5"
                >
                  Kirim Pesan
                </motion.button>
              </Col>
              <Col md={4}>
                <div className="contact-ni">
                  <div className="d-flex flex-column pb-3 pt-5 px-4">
                    <span className="fs-5 fw-bold mb-2">Address</span>
                    <span>4567 Jalan Merdeka, Jakarta Barat, Indonesia</span>
                  </div>
                  <div className="d-flex flex-column px-4 pb-3">
                    <span className="fs-5 fw-bold mb-2">Contact</span>
                    <span>08234567890</span>
                    <span>BeranIn@gmail.com</span>
                  </div>
                  <div className="d-flex flex-column px-4">
                    <span className="fs-5 fw-bold mb-2">Stay Connected</span>
                    <div className="d-flex gap-4 ">
                      <a href="https://www.instagram.com/bearnin/">
                        <i className="bx bxl-instagram custom-contact fs-2 p-2"></i>
                      </a>
                      <a href="https://twitter.com/beranin">
                        <i className="bx bxl-twitter custom-contact fs-2 p-2"></i>
                      </a>
                      <a href="https://youtube.com/beranin">
                        <i className="bx bxl-youtube custom-contact fs-2 p-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactSection;
