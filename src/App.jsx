import { useState } from "react";
import "./App.css";
import { LoadingScreen, NavBar } from "./components";
import { useSelector } from "react-redux";
import {
  Categories,
  Home,
  Login,
  Logout,
  ProductDetail,
  Purchases,
} from "./pages";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./pages/Footer";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter className="App">
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Container fluid className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
