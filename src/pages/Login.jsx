import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center align-self-center  mt-5 pt-5 mb-5 pb-5 ">
      {/* <h1>Login</h1> */}
      <Row className="">
        <Col className="d-flex justify-content-center align-items-center align-self-center px-xs-2 px-sm-3 px-lg-5 mx-xs-1 mx-sm-3 mx-lg-5 my-5 ">
          <Form className=" pt-5 pb-5 px-xs-2  px-sm-3 px-lg-5 mx-xs-2 mx-sm-3 mx-lg-5 rounded bg-light shadow-lg bg-info ">
            <div className="text-center" style={{ width: "18rem" }}>
              <h3>
                <b className="text-center d-block">Welcome!</b>
              </h3>
              <h5 className="px-1 mx-1">Enter your email and password</h5>
            </div>
            <Container className="mx-auto">
              <Form.Group
                className="  my-4"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="me-5"
                />
              </Form.Group>

              <Form.Group
                className="my-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  className="me-5"
                />
              </Form.Group>
              <div className="d-grid my-2 mb-4 ">
                <Button
                  className="btn btn-outline-primary d-flex justify-content-center align-items-center fs-6 px-4  mt-3"
                  variant="red"
                  size="lg"
                >
                  LOGIN
                  <box-icon
                    name="right-arrow-alt"
                    className="me-2"
                    color="red"
                    size="sm"
                  ></box-icon>
                </Button>
              </div>
              <small className="mt-5 pt-5 text-secondary ">
                Don't have an account?
                <Link to="/logout" className="text-primary mx-2 ">
                  Sign up
                </Link>
              </small>
            </Container>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
