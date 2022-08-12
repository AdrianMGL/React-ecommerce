import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div className="mt-5 pt-5 mb-5 pb-5">
      <Row className="">
        <Col className="d-flex justify-content-center align-items-center align-self px-xs-2 px-sm-3 px-lg-5 mx-xs-1 mx-sm-3 mx-lg-5 my-5 ">
          <Form className=" pt-4 pb-4 px-xs-2  px-sm-3 px-lg-5 mx-xs-2 mx-sm-3 mx-lg-5  rounded bg-light shadow-lg ">
            <div className="text-center mb-3" style={{ width: "18rem" }}>
              <h4>
                <b className="text-center d-block">Ecommerce</b>
              </h4>
              <h5>Please enter your information for creat account</h5>
            </div>
            <Container className="mx-auto">
              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <small>First Name</small>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  className="me-5"
                />
              </Form.Group>

              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>
                  <small>Last Name</small>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  className="me-5"
                />
              </Form.Group>

              <Form.Group
                className="  mt-2"
                controlId="exampleForm.ControlInput12"
              >
                <Form.Label>
                  <small>Email</small>{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="me-5"
                />
              </Form.Group>

              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>
                  <small>Password</small>{" "}
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="me-5"
                />
              </Form.Group>

              <Form.Group
                className="mt-2"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>
                  <small> Phone (10 characters)</small>
                </Form.Label>
                <Form.Control
                  type="text"
                  min="10"
                  max="10"
                  placeholder="000-000-0000"
                  className="me-5"
                  required
                />
              </Form.Group>
              <div className="d-grid my-2 mb-3 ">
                <Button
                  className="btn btn-outline-primary d-flex justify-content-center align-items-center  fs-6 px-4 mt-xs-1 mt-sm-2 mt-lg-3"
                  variant="red"
                  size="lg"
                >
                  SIGN UP
                  <box-icon
                    name="right-arrow-alt"
                    className="me-2"
                    color="red"
                    size="sm"
                  ></box-icon>
                </Button>
              </div>
              <small className="text-secondary ">
                Already have an account?
                <Link to="/login" className="text-primary mx-2 ">
                  Log in
                </Link>
              </small>
            </Container>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Logout;
