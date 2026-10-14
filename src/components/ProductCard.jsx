import React from "react";

function StarRating({ rate }) {
  const full = Math.round(rate);
  let stars = "";
  for (let i = 1; i <= 5; i++) stars += i <= full ? "★" : "☆";
  return <span className="stars">{stars}</span>;
}

export default function ProductCard({ product, onAddToCart }) {
  const discount = Math.round(100 - (product.price / product.mrp) * 100);
  const deliveryDay = ["Tue, 22 Sep", "Wed, 23 Sep", "Thu, 24 Sep"][product.id % 3];

  return (
    <div className="product-card">
      {product.badge && (
        <span
          className={`badge ${product.badge === "Amazon's Choice" ? "choice" : ""}`}
        >
          {product.badge}
        </span>
      )}

      <div className="card-img-wrap">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/300x300/f5f5f5/999?text=Image+unavailable";
          }}
        />
      </div>

      <p className="card-category">{product.category}</p>
      <h3 className="card-title">{product.title}</h3>

      <div className="card-rating">
        <StarRating rate={product.rating.rate} />
        <span className="rating-count">
          {product.rating.count.toLocaleString()}
        </span>
      </div>

      <div className="card-price-row">
        <span className="card-price">
          <sup>$</sup>
          {product.price.toFixed(2)}
        </span>
        <span className="card-mrp">${product.mrp.toFixed(2)}</span>
        <span className="card-discount">-{discount}%</span>
      </div>

      <div className="card-delivery">
        FREE delivery <b>{deliveryDay}</b>
        <br />
        <span className="card-prime">prime</span>
      </div>

      <div className="card-spacer" />

      <button className="add-cart-btn" onClick={() => onAddToCart(product.id)}>
        Add to Cart
      </button>
    </div>
  );
}