import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Nvbar = () => (
  <Navbar bg="dark" variant="dark">
    <NavLink to="/" className="nav-link" >
      <Navbar.Brand>
        <img
          src="https://react-bootstrap.netlify.app/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span>GS</span>
      </Navbar.Brand>{" "}
    </NavLink>
    <Nav className="mr-auto">
      <NavLink to="/" className="nav-link" activeClassName="selected-link">Home</NavLink>
    </Nav>
  </Navbar>
);

export default Nvbar;
