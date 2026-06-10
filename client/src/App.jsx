import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const location = useLocation();

  // Add To Cart Logic
  const addToCart = (item) => {

    setCart((prevCart) => {

      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {

        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );

      } else {

        return [...prevCart, { ...item, quantity: 1 }];

      }

    });

  };

  return (
    <>

      {/* Navbar with cart count */}
      <Navbar cart={cart} />

      {/* Show SearchBar only on Menu page */}
      {location.pathname === "/menu" && (
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      )}

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Menu Page */}
        <Route
          path="/menu"
          element={
            <Menu
              search={search}
              addToCart={addToCart}
            />
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Payment Page */}
        <Route
          path="/payment"
          element={
            <Payment
              cart={cart}
              setCart={setCart}
            />
          }
        />

        {/* Order Success Page */}
        <Route
          path="/success"
          element={<OrderSuccess />}
        />

      </Routes>

    </>
  );
}

export default App;