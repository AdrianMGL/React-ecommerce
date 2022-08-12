import React from "react";
import { Carousel, Container } from "react-bootstrap";

const ProductDetailsCarousel = ({ PDCarousel }) => {
  return (
    <Container>
      <Carousel variant="dark">
        {PDCarousel?.productImgs?.map((carouselImage) => (
          <Carousel.Item key={carouselImage}>
            <img
              className="d-block w-100"
              src={carouselImage}
              alt={PDCarousel?.title}
              style={{ height: "20rem", width: "50%", objectFit: "contain" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <figcaption className="mt-5 text-center d-flex justify-content-around align-items-center">
        {PDCarousel?.productImgs?.map((ImageFooter) => (
          <img
            src={ImageFooter}
            alt={PDCarousel?.title}
            style={{ height: "3rem", width: "50%", objectFit: "contain" }}
            className="text-center mx-auto"
            key={ImageFooter}
          />
        ))}
      </figcaption>
    </Container>
  );
};

export default ProductDetailsCarousel;
