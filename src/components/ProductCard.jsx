import React, { useState } from "react";
import { Card, Col, Button, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartThunk } from "../store/slices/carts.slice";

const ProductCard = ({ productsItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  return (
    <Col>
      <Card
        onClick={() => navigate(`/products/${productsItem.id}`)}
        className="card-shadow"
      >
        <Card.Img
          variant="top"
          src={productsItem.productImgs[0]}
          className="w-75  d-flex justify-content-center align-items-center img-centered mt-3 mx-auto"
          style={{ height: "12rem", objectFit: "contain" }}
        />
        <Card.Body className="mx-3">
          <Card.Title className=" text-dark my-2 mx-xs-1 mx-sm-2 mx-lg-2 ">
            {productsItem.title}
          </Card.Title>
          <ListGroup className="list-group-flush d-flex justify-content-center">
            <ListGroup.Item className=" text-secondary justify-content-start gap-2 align-items-center  d-flex">
              <b>Price:</b>
              <small>
                <b>$</b>
                {productsItem.price}
              </small>
            </ListGroup.Item>
            <Button
              onClick={() => dispatch(addCartThunk(productsItem.id, quantity))}
              variant=""
              className="d-flex justify-content-center align-items-center mt-3 btn btn-outline-primary "
            >
              Add
              <box-icon
                name="cart"
                animation="tada-hover"
                color="red"
                className="mx-2 px-2"
              ></box-icon>
            </Button>
          </ListGroup>
        </Card.Body>
        <Card.Footer className=" text-center">
          <small className="text-muted">{productsItem.category.name}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
