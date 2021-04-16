import React from "react";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { render } from "sass";
import LogoMetal from "../../config/assets/LogoMetal.png";

interface navbarprops {
  link1 : string,
  link2 : string,
  class : string,
}

export function NavbarComponent( props: navbarprops) {
  return (
    <Navbar className={props.class}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <img
        src={LogoMetal}
        width="100px"
        height="auto"
        alt="logo"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <a> {props.link1} </a>{" "}
          </Nav.Link>
          <Nav.Link>
            {" "}
            <a> {props.link2} </a>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
