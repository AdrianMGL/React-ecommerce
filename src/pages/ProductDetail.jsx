import React, { useEffect, useState } from "react";
import { Button, Col, Container, Figure, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductDetailsCarousel from "../components/ProductDetailsCarousel";
import { addCartThunk } from "../store/slices/carts.slice";
import { getProductsThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const allProducts = useSelector((state) => state.products);
  const [productsDetail, setProductsDetail] = useState({});
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [quantity, setQuantity] = useState(1);

  //
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  useEffect(() => {
    const productsFind = allProducts.find(
      (productsItem) => productsItem.id === Number(id)
    );
    setProductsDetail(productsFind);

    const filteredProducts = allProducts.filter(
      (productsItem) => productsItem.category.id === productsFind.category.id
    );
    setSuggestedProducts(filteredProducts);
  }, [allProducts, id]);

  //  console.log(productsDetail);

  return (
    <Container className="mt-5 pt-5 mb-5 pb-5 mx-auto bg- ">
      <h6>
        <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Home
        </span>
        <box-icon name="run" animation="fade-right-hover"></box-icon>
        <b className="text-primary">Detail products</b>
      </h6>
      <Row xs={1} lg={2} className="g-1 mt-5 ">
        <Row xs={1} lg={1} className="g-1 bg- ">
          <Col>
            <div className="d-flex justify-conten-center  bg-">
              <Figure className="d-flex justify-conten-center mx-auto   bg-">
                <ProductDetailsCarousel PDCarousel={productsDetail} />
              </Figure>
            </div>
          </Col>
        </Row>

        <Row xs={1} lg={1} className="g-1  px-xs-1 px-sm-2 px-md-3 px-lg-4 bg-">
          <Col className="px-xs-1 px-sm-1 px-md-2 px-lg-3  bg-">
            <h4 className="text-start mb-3">
              <b className="text-dark text-start">{productsDetail?.title}</b>
            </h4>
            <small className="text-justify text-center text-secondary mx-1 mt-5 ">
              {productsDetail?.description}
            </small>
            {/*  */}
            <div className="d-flex justify-content-around bg- mt-4">
              <div className="price">
                <label htmlFor="" className="text-secondary">
                  Price:
                </label>
                <h5>
                  <b>${productsDetail?.price}</b>
                </h5>
              </div>
              <div className="quantity">
                <label htmlFor="" className="text-secondary mb-1">
                  Quantity:
                </label>
                <div className="quantity__details d-flex justify-content-center">
                  <button
                    onClick={() => setCountCart(countCart - 1)}
                    className="btn btn-outline-secondary rounded-none  d-flex align-items-center px-1 m-0"
                  >
                    <box-icon
                      name="minus"
                      color="gray"
                      size="sm"
                      className=""
                    ></box-icon>
                  </button>
                  <div className="value d-flex align-items-center text-primary fs-5 px-3 border  mx-0">
                    {countCart}
                  </div>
                  <button
                    onClick={() => setCountCart(countCart + 1)}
                    className="btn btn-outline-secondary  d-flex align-items-center px-1 m-0 "
                  >
                    <box-icon
                      name="plus"
                      className=""
                      size="sm"
                      color="gray"
                    ></box-icon>
                  </button>
                </div>
              </div>
            </div>

            <Button
              onClick={() =>
                dispatch(addCartThunk(productsDetail.id, quantity))
              }
              variant=""
              className="btn btn-outline-primary d-flex justify-content-center align-items-center text-center w-100  pt-xs-2 mt-xs-2 mt-sm-3 mt-lg-4 my-1 "
            >
              Add to cart
              <box-icon
                name="cart"
                className=" mx-5 me-5 px-5"
                color="red"
                animation="tada-hover"
              ></box-icon>
            </Button>
          </Col>
        </Row>
      </Row>
      <Row className="g-2 bg- mt-xs-2 mt-sm-3 mt-lg-5 mx-1 ">
        <h5 className="mt-4 text-primary">Discover similar items</h5>
        <Col className="d-flex flex-wrap  mt-1 g-1 mx-1 bg-">
          {suggestedProducts.map((suggestedProduct) => (
            <div
              onClick={() => navigate(`/products/${suggestedProduct.id}`)}
              key={suggestedProduct.id}
              className=" px-2 mt-3 g-1 "
              style={{ width: "20rem" }}
            >
              <ProductCard productsItem={suggestedProduct} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
