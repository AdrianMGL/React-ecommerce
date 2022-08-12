import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../pages";

const NavBar = () => {
  //
  const navigate = useNavigate();

  /**  */
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");

    navigate("/login");
  };

  //
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  //
  const carts = useSelector((state) => state.carts);

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
        <Navbar.Collapse id="navbarScroll" className="  justify-content-end  ">
          <Navbar.Text
            className="d-flex me-2  m-0 p-0 gap-3 "
            style={{ maxHeight: "100px" }}
          >
            <Nav.Link
              href="/#/purchases"
              className="text-white  px-2 px-lg-2 mt-0 bg-"
            >
              <box-icon
                name="box"
                animation="tada-hover"
                color="white"
              ></box-icon>
            </Nav.Link>

            <Nav.Link
              className=" position-relative text-white px-1 px-lg-1 mt-0 bg- "
              animation="tada"
            >
              <Cart />
              <small className={` product__cart-quantity `} animation="tada">
                <span
                  className="d-flex justify-content-center align-items-center  "
                  animation="tada"
                >
                  {carts?.products?.length}
                </span>
              </small>
            </Nav.Link>

            {/*  */}
            {token ? (
              <Nav.Link onClick={logout} className=" px-1">
                <box-icon
                  name="log-out-circle"
                  className="bx-lg text-danger px-1 px-lg-1 "
                  animation="tada-hover"
                  color="white"
                ></box-icon>
              </Nav.Link>
            ) : (
              <Nav.Link
                href="/#/login"
                className="text-success px-1 px-lg-1   "
              >
                <box-icon
                  name="log-in-circle"
                  className="bx-lg text-danger"
                  animation="tada-hover"
                  color="white"
                ></box-icon>
              </Nav.Link>
            )}

            {/*  */}
            <Nav.Link className="text-white  px-1 px-lg-1  mt-0 bg- ">
              <span className="text-capitalize">{user}</span>
              <span className={` available `}> </span>
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
