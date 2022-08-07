import React from "react";
import "./../assets/styles/loadingScreen.css";
import { Spinner } from "react-bootstrap";

const LoadingScreen = () => {
  return (
    <div className="overlay">
      <Spinner animation="grow" variant="primary" className="one" />
      <Spinner animation="grow" variant="primary" className="two" />
      <Spinner animation="grow" variant="primary" className="three" />
      <Spinner animation="grow" variant="primary" className="four" />
      <Spinner animation="grow" variant="primary" className="five" />
    </div>
  );
};

export default LoadingScreen;
