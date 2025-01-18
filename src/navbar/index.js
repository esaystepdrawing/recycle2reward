import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap"

import "./Navbar.css";

export const R2RNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container>
        <Navbar.Brand href="#contactrecycle2reward" className="cs-button-solid cs-nav-button">Contact Us </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" className="cs-li-link">Login</Nav.Link>
            <Nav.Link href="/sign-up" className="cs-li-link">Sign Up</Nav.Link>
            <Nav.Link href="/recyclereward" className="cs-li-link">Rewards</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default R2RNavbar;