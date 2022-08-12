import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  InputGroup,
  Form,
  Button,
  ListGroup,
  Container,
} from "react-bootstrap";
import axios from "axios";

// Redux
import {
  getProductsThunk,
  filterTitleThunk,
  filterCategoryThunk,
} from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import HomeCarousel from "../components/HomeCarousel";

const Home = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);

  //
  const products = useSelector((state) => state.products);

  /*** */
  useEffect(() => {
    dispatch(getProductsThunk());
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  return (
    <Container fluid className="mt-5 pt-3">
      <HomeCarousel className="mt-5 pt-5" />
      <Row className="my-1  ">
        <Col lg={3} className=" mt-1" fixed="top">
          <ListGroup className="mt-sm-2 pt-sm-2 mt-lg-5 pt-lg-3">
            <h5
              className="text-secondary my-lg-2"
              onClick={() => dispatch(getProductsThunk())}
              style={{ cursor: "pointer" }}
            >
              All category
            </h5>
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
          {/* Price */}
          <ListGroup className="mt-2 pt-2  mt-sm-2 pt-sm-2 mb-sm-2 pb-sm-2  mt-lg-3 pt-lg-3">
            <h5 className="text-secondary my-lg-2">Price</h5>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextNumberFrom"
              >
                <Form.Label column sm="2">
                  From
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="Range " />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextNumberTo"
              >
                <Form.Label column sm="2">
                  to
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="number" placeholder="Range " />
                </Col>
              </Form.Group>
              <div className="d-grid gap-2 mt-4 ">
                <Button variant="outline-dark" size="xs">
                  Filter
                </Button>
              </div>
            </Form>
          </ListGroup>
        </Col>

        <Col className="mt-xs-3 pt-xs-1 mt-lg-1 ">
          <Row className="justify-content-start mt-xs-3 mt-sm-2 mt-lg-2 mb-sm-1 pb-xs-1 pb-sm-2 pb-lg-2">
            <Col xs="12" lg="8" className="bg- mt-1 pt-2">
              <InputGroup className="mb-3 mt-xs-3 pt-xs-5">
                <Form.Control
                  placeholder="Search product"
                  aria-label="Search product"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  className="border text-secondary"
                />
                <i className="bx bx-user"></i>
                <Button
                  variant="outline-dark"
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
