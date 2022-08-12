import React, { useEffect, useState } from "react";
import { Button, Col, Container, Offcanvas, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//
import {
  buyCart,
  deleteCartThunk,
  getCartsThunk,
} from "../store/slices/carts.slice";

//
import { useDispatch, useSelector } from "react-redux";

/*** */
const Cart = () => {
  //
  const token = localStorage.getItem("token");

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //
  const carts = useSelector((state) => state.carts);

  const handleShow = () => {
    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  /*** Get Total  */
  const getTotalPrice = (carts) => {
    let totaProduct = 0;

    carts?.forEach((cart) => {
      totaProduct +=
        Number(cart?.price) * Number(cart?.productsInCart?.quantity);
    });
    return totaProduct.toFixed(2);
  };

  /*** Get Total Product*/
  const getTotalProduct = (carts) => {
    let totalProduct = 0;

    carts?.forEach((cart) => {
      totalProduct += Number(cart.productsInCart.quantity);
    });
    return totalProduct;
  };

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
              <b className="fs-4">Products Cart</b>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className=" mx-2 bg-">
            {carts?.products?.map((cart) => (
              <div key={cart.id} className="  bg-in ">
                <Row className="  bg ">
                  <Col className="bg-">
                    <small className="text-secondary text-sm">
                      {cart.brand}
                    </small>
                    <h6
                      className="text-dark m-0 p-0"
                      onClick={() => navigate(`/products/${cart.id}`)}
                    >
                      <span onClick={handleClose} style={{ cursor: "pointer" }}>
                        <b className="fs-">{cart.title}</b>
                      </span>
                    </h6>
                    <h6 className=" d-flex justify-content-start text-secondary m-0 p-0 mt-1 ">
                      <span className="d-flex justify-content-center align-items-center me-2  bg">
                        <small className="text-sm">Quantity</small>
                      </span>
                      <span className="border rounded text-sm py-1 px-2 bg-">
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
                      className=" bg-"
                      style={{ cursor: "pointer" }}
                    >
                      <box-icon
                        className=""
                        name="trash"
                        color="red"
                      ></box-icon>
                    </span>
                  </Col>
                </Row>

                <Row className="mt-3 text-end bg- ">
                  <h6 className="text-secondary d-flex justify-content-between align-items-center bg-">
                    <small className="text-sm bg-">
                      P. unit:
                      <b className="text-secondary  px-2 me-0">${cart.price}</b>
                    </small>
                    <small className="bg-">
                      Total:
                      <b className="text-primary px-2 me-0">
                        $
                        {Number(cart.price) *
                          Number(cart.productsInCart?.quantity).toFixed(2)}
                      </b>
                    </small>
                  </h6>
                </Row>
                <hr className="border  my-2 p-0" />
              </div>
            ))}
          </Offcanvas.Body>
          <hr className=" border" />
          <Row className="pt-0 pb-2 text-center   bg- ">
            <h6 className=" d-flex justify-content-between px-lg-5   text-secondary">
              <small>Total products:</small>
              <b className="text-secondary me-4">
                {getTotalProduct(carts?.products)}
              </b>
            </h6>
            <h5 className=" d-flex justify-content-between px-lg-5 px-sm-3  text-dark">
              Total:
              <b className="text-dark me-4">
                ${getTotalPrice(carts?.products)}
              </b>
            </h5>
            <div className="d-grid my-2">
              <Button
                className="btn btn-outline-primary d-flex justify-content-center align-items-center fs-6 px-4 mx-4"
                variant=""
                size="lg"
                onClick={() => dispatch(buyCart())}
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
