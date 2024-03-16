import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Footer from "./components/Footer";
//import images
import bannermens from "./assets/bannermens.png";
import bannerwomen from "./assets/bannerwomens.png";
import bannerkids from "./assets/bannerkids.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/mens"
            element={<Category category="Men" banner={bannermens} />}
          />
          <Route
            path="/womens"
            element={<Category category="Women" banner={bannerwomen} />}
          />
          <Route
            path="/kids"
            element={<Category category="Kids" banner={bannerkids} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
