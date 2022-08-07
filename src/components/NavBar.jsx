import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Cart } from "../pages";

const NavBar = () => {
  return (
    <Navbar
      fixed="top"
      bg="primary"
      variant="primary"
      expand="lg"
      className="navbar navbar-expand-lg navbar-primary  bg-primary shadow px-5"
    >
      <Container fluid>
        <Navbar.Brand href="/#" className="text-white fs-4">
          E-commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="justify-content-end ml-1 "
        >
          <Navbar.Text
            className="d-flex me-3  m-0 p-0  "
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link
              href="/#/login"
              className="text-success bg- px-2 px-lg-3  mt-0 "
            >
              <box-icon
                name="user"
                className="bx-lg text-danger"
                animation="tada-hover"
                color="white"
              ></box-icon>
            </Nav.Link>
            <Nav.Link
              href="/#/purchases"
              className="text-white bg- px-2 px-lg-3 mt-0"
            >
              <box-icon
                name="box"
                animation="tada-hover"
                color="white"
              ></box-icon>
            </Nav.Link>
            <Nav.Link className="text-white bg- px-1 px-lg-1 mt-0 ">
              <Cart />
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
