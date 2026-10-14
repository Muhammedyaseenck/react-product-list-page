import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <>
      <Header cartCount={cartCount} />
      <Home onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}