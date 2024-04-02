import React, { useState } from "react";
import ConsulImg from "../../assets/img/konsul.png";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import { motion } from "framer-motion";

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
          <div className="d-flex justify-content-center gap-4">
            <div className="d-flex align-items-center gap-2 ">
              <i className="bx bxs-time-five fs-3 custom-icon-bg p-2"></i>
              <span className="custom-link fw-bold">24/7 Avabilaility</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bx bx-headphone fs-3 custom-icon-bg p-2"></i>
              <span className="custom-link fw-bold">Fast Respon</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bx bxs-lock fs-3 custom-icon-bg p-2"></i>
              <span className="custom-link fw-bold">Anonymous & Privacy</span>
            </div>
          </div>

          <Row className="mt-5 pt-5">
            <Col md={6}>
              <Image
                src={ConsulImg}
                alt="consul-img"
                className="custom-img-consul"
              />
            </Col>
            <Col md={6}>
              <div className="d-flex gap-3">
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
                <div class="d-flex align-items-center gap-3 mb-3">
                  <i class="bx bx-message-square-detail fs-2"></i>
                  <div class="d-flex flex-column">
                    <span class="fw-semibold fs-5">
                      Konsultasikan dengan Gurumu
                    </span>
                    <span>kamu bisa memilih guru yang kamu inginkan</span>
                  </div>
                </div>

                <div class="d-flex align-items-center gap-3">
                  <i className="bx bx-message-square-detail fs-2"></i>
                  <div class="d-flex flex-column">
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
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Belum Ready Untuk Form Login HEHEH</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConsultSection;
