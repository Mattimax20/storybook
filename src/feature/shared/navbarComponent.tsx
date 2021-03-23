import React from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { render } from "sass";
import LogoMetal from "../../config/assets/LogoMetal.png";
export function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <img
        src={LogoMetal}
        width="100px"
        height="auto"
        alt="Metal Montaggi logo"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <Link to="/hompage">Home </Link>{" "}
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/gallery"> Gallery </Link>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
