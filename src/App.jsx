import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LoadingScreen, NavBar, ProtectedRoutes } from "./components";
import { useSelector } from "react-redux";
import {
  Categories,
  Home,
  Login,
  Logout,
  ProductDetail,
  Purchases,
  Cart,
} from "./pages";
import { Container } from "react-bootstrap";
import Footer from "./pages/Footer";
import "./App.css";

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
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
