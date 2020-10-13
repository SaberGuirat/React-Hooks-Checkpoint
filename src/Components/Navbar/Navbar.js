import React from "react";
import { Navbar,Nav } from "react-bootstrap";
const Nvbar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src="https://react-bootstrap.netlify.app/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    <span>GS</span>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
    </Nav>
  </Navbar>
);

export default Nvbar;
