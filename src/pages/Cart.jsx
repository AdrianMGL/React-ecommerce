import React, { useEffect, useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//
import { deleteCartThunk, getCartsThunk } from "../store/slices/carts.slice";

//
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //
  const carts = useSelector((state) => state.carts);

  /** */
  useEffect(() => {
    dispatch(getCartsThunk());
  }, []);

 // console.log(carts);
  //console.log(carts.products.length);

  return (
    <Container>
      <div className=" bg-">
        <span variant="" onClick={handleShow}>
          <box-icon
            name="cart"
            className="text-white"
            animation="tada-hover"
            color="white"
          ></box-icon>
        </span>

        <Offcanvas
          placement="end"
          show={show}
          onHide={handleClose}
          className="bg-"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="text-center">
              <b className="fs-4">Products list</b>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" mx-2 bg-">
            {carts?.products?.map((cart) => (
              <div key={cart.id} className=" bg-in ">
                <Row className=" bg ">
                  <Col className="bg-">
                    <small className="text-secondary">{cart.brand}</small>
                    <h6 className="text-dark">
                      <span
                        onClick={() => navigate(`/products/${cart.id}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <b>{cart.title}</b>
                      </span>
                    </h6>
                    <h6 className=" d-flex justify-content-start text-secondary  ">
                      <span className="border rounded py-1 px-3 bg-">
                        {cart.productsInCart.quantity}
                      </span>
                    </h6>
                  </Col>

                  <Col
                    xs={1}
                    md={1}
                    lg={1}
                    className=" d-flex justify-content-center align-items-center mx-3 bg-"
                  >
                    <span
                      onClick={() => dispatch(deleteCartThunk(cart.id))}
                      className="bg-"
                    >
                      <box-icon name="trash" color="red"></box-icon>
                    </span>
                  </Col>
                </Row>

                <Row className="mt-0 text-end bg- ">
                  <h6 className="text-secondary">
                    <small>
                      Total:
                      <b className="text-primary px-2 me-0">${cart.price}</b>
                    </small>
                  </h6>
                </Row>
                {/* <hr /> */}
              </div>
            ))}
          </Offcanvas.Body>
          <hr className=" border " />

          <Row className="pt-0 pb-2 text-center   bg- ">
            <h6 className=" d-flex justify-content-between px-lg-5   text-secondary">
              Total products:
              <b className="text-secondary me-4">{carts?.products?.length}</b>
            </h6>
            <h5 className=" d-flex justify-content-between px-lg-5 px-sm-3  text-secondary">
              Total: <b className="text-dark me-4">$1999.00</b>
            </h5>
            <div className="d-grid my-2">
              <Button
                className="btn btn-outline-primary d-flex justify-content-center align-items-center fs-6 px-4 mx-4"
                variant=""
                size="lg"
              >
                Checkout
                <box-icon
                  name="check-shield"
                  className="me-5"
                  color="green"
                ></box-icon>
              </Button>
            </div>
          </Row>
        </Offcanvas>
      </div>
    </Container>
  );
};

export default Cart;
