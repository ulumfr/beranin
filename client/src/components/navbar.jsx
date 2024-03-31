import React from "react";
import {
  Navbar as Navbar,
  Container,
  Image,
  Nav,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        height: "80px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
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
        />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mx-auto">
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
          <Nav className="gap-2">
            <Nav.Link as={NavLink} to="/login">
              <span className="custom-button-report">REPORT!</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
