import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const PurchasesItem = ({ purchase }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(purchase.createdAt).toLocaleDateString(
    "en-us",
    options
  );

  //
  const navigate = useNavigate();

  return (
    <div className="card__personality">
      <Card.Header className="bg-primary-personality d-flex justify-content-start px-5  ">
        <b>
          <small>{date}</small>
        </b>
      </Card.Header>
      {purchase?.cart?.products.map((purchaseProduct) => (
        <div
          key={purchaseProduct.id}
          className=" d-flex justify-content-end mx-auto "
        >
          <ListGroup
            variant="flush"
            className="d-flex justify-content-end  mx-xs-auto mx-lg-5 "
          >
            <ListGroup.Item
              className="d-flex justify-content-end   bg- "
              onClick={() => navigate(`/products/${purchaseProduct.id}`)}
              style={{ cursor: "pointer" }}
            >
              <Card.Body className="bg- mx-2 px-2  bg- ">
                {purchaseProduct.title}
              </Card.Body>
              <Card.Body className="bg-secondary-personale d-flex justify-content-center align-items-center  border  mx-auto px-xs-0 px-lg-3 py-1 rounded ">
                {purchaseProduct.productsInCart.quantity}
              </Card.Body>
              <Card.Body className="bg- d-flex justify-content-center mx-xs-0 mx-sm-1 mx-lg-auto px-lg-auto ">
                <b>$ {purchaseProduct.price}</b>
              </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </div>
      ))}
    </div>
  );
};

export default PurchasesItem;
