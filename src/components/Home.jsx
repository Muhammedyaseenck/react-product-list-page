import React from "react";
import ProductCardList from "./ProductCardList";
import { PRODUCTS } from "../data/products";

export default function Home({ onAddToCart }) {
  return (
    <main className="page">
      <div className="page-title-row">
        <div>
          <h1 className="page-title">Results for "sports shoes"</h1>
          <p className="page-subtitle">
            Price and other details may vary based on product size and colour.
          </p>
        </div>
        <span className="results-count">{PRODUCTS.length} results</span>
      </div>

      <ProductCardList products={PRODUCTS} onAddToCart={onAddToCart} />
    </main>
  );
}