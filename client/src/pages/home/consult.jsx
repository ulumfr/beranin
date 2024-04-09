import React, { useState } from "react";
import ConsulImg from "../../assets/img/konsul.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import LoginComponents from "../../components/modal/login";

const ConsultSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <div>
      <section className="py-5 my-5">
        <Container>
          <Row>
            <Col
              xs={12}
              className="d-flex flex-wrap justify-content-start justify-content-md-center gap-4"
            >
              <div className="d-flex align-items-center gap-2 ">
                <i className="bx bxs-time-five fs-3 custom-icon-bg p-2"></i>
                <span className="custom-link fw-bold">24/7 Availability</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bx bx-headphone fs-3 custom-icon-bg p-2"></i>
                <span className="custom-link fw-bold">Fast Response</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="bx bxs-lock fs-3 custom-icon-bg p-2"></i>
                <span className="custom-link fw-bold">Anonymous & Privacy</span>
              </div>
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col md={6}>
              <Image
                src={ConsulImg}
                alt="consul-img"
                className="custom-img-consul w-75"
              />
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3 mt-4">
                <div className="kotak-kecil" />
                <span
                  className="fw-normal fs-4 text-center"
                  style={{ color: "var(--text-color)" }}
                >
                  mulai sekarang
                </span>
              </div>
              <div
                className="fs-2 fw-bolder mt-3"
                style={{ color: "var(--text-color)" }}
              >
                Berani untuk berbicara dan temukan dukungan yang Anda butuhkan
              </div>

              <div className="mt-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <i className="bx bx-message-square-detail fs-2"></i>
                  <div className="d-flex flex-column">
                    <span className="fw-semibold fs-5">
                      Konsultasikan dengan Gurumu
                    </span>
                    <span>kamu bisa memilih guru yang kamu inginkan</span>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <i className="bx bx-message-square-detail fs-2"></i>
                  <div className="d-flex flex-column">
                    <span className="fw-semibold fs-5">
                      Konsultasikan dengan Psikolog
                    </span>
                    <span>
                      kamu bisa memilihpakar pesikolog yang ahli dalam bidangnya
                    </span>
                  </div>
                </div>
                <motion.button
                  initial={{ y: 100, scale: 0.5 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  onClick={handleShow}
                  className="custom-button-consul mt-5"
                >
                  Konsultasikan Sekarang
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {showModal && <LoginComponents closeModal={handleClose} />}
    </div>
  );
};

export default ConsultSection;
