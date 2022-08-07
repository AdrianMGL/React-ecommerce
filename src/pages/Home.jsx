import React, { useEffect, useState } from "react";
import {
  Row,
  Card,
  Col,
  InputGroup,
  Form,
  Button,
  ListGroup,
  Container,
  Badge,
} from "react-bootstrap";
import axios from "axios";

// Redux
import {
  getProductsThunk,
  filterTitleThunk,
  filterCategoryThunk,
} from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  //
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  // console.log(products);
 // console.log(categories);
  //console.log(searchValue);

  return (
    <Container fluid className="">
      <Row className="my-5 ">
        <Col lg={3} className="mt-5" fixed="top">
          {/* Category */}
          <ListGroup className="mt-lg-5 pt-lg-3">
            <h5 className="text-primary my-lg-2">All Category</h5>
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                action
                variant="light"
                onClick={() => dispatch(filterCategoryThunk(category.id))}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col className="mt-lg-2 ">
          <Row className="justify-content-start mt-xs-2 mt-sm-4 mt-lg-5">
            <Col xs="12" lg="8" className="">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="What are you looking for?"
                  aria-label="What are you looking for?"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  className="border text-secondary"
                />
                <i className="bx bx-user"></i>
                <Button
                  variant="outline-success"
                  onClick={() => dispatch(filterTitleThunk(searchValue))}
                >
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>
          {/* List */}
          <Row xs={1} md={2} xl={3} className="g-3 ">
            {products.map((productsItem) => (
              <div key={productsItem.id}>
                <ProductCard productsItem={productsItem} />
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
