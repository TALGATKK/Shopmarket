import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Order } from "./Pages/Order";
import { Catalog } from "./Pages/Catalog";
import { Cart } from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginSignup } from "./Pages/LoginSignup";
import { useState, useEffect } from "react";

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState("");
  async function getProducts() {
    try {
      const response = await fetch(
        "https://mocki.io/v1/bf1c02c5-1cae-4fbf-a6dc-bebdfc02f173"
      );
      const resultJson = await response.json();
      setProductsList(resultJson);
      console.log(resultJson);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddOrder = () => {
    setOrder(cartItems);
    setCartItems([]);
  };

  return (
    <div class="wrapper">
      <BrowserRouter>
        <Header
          setSearch={setSearch}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                productsList={productsList}
                handleAddProduct={handleAddProduct}
                isLoggedIn={isLoggedIn}
                search={search}
                setSort={setSort}
                sort={sort}
              />
            }
          />
          <Route
            path="/login"
            element={
              <LoginSignup
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleAddOrder={handleAddOrder}
                handleClearCart={handleClearCart}
              />
            }
          />
          <Route path="/order" element={<Order order={order} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
