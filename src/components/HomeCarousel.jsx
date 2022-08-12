import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../assets/images/e-commerce-banner-1.png";
import banner2 from "../assets/images/e-commerce-banner-2.png";
import banner3 from "../assets/images/e-commerce-banner-3.png";
import banner4 from "../assets/images/e-commerce-banner-4.png";
import banner5 from "../assets/images/e-commerce-banner-5.png";

const HomeCarousel = () => {
  /** */
  return (
    <Container fluid>
      <Carousel
        variant="dark"
        className="mt-xs-2 pt-xs-2 mt-sm-1 pt-sm-1 mt-5 pt-5"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner4}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src={banner5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default HomeCarousel;
