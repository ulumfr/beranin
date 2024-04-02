import React, { useState } from "react";
import { Navbar, Container, Image, Nav, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { motion } from "framer-motion";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src={logo}
              alt="logo-beranin"
              draggable="false"
              width={"120px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="menu-icon">
              <i className="bx bx-menu"></i>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent" className="text-center">
            <Nav className="mx-auto gap-2">
              <Nav.Item>
                <Nav.Link as={NavLink} to="/" className="fw-medium custom-link">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/news"
                  className="fw-medium custom-link"
                >
                  News
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={NavLink}
                  to="/about"
                  className="fw-medium custom-link"
                >
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <motion.div whileHover={{ scale: 1.1 }}>
                <button className="custom-button-report" onClick={handleShow}>
                  REPORT!
                </button>
              </motion.div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </>
  );
};

export default NavBar;
