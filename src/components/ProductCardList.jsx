import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCardList({ products, onAddToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}