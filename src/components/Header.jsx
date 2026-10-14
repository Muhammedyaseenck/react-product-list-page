import React from "react";

export default function Header({ cartCount }) {
  return (
    <header className="site-header">
      <div className="header-top">
        <a href="#" className="logo">
          shop<span>Kart</span>
        </a>

        <div className="search-bar">
          <select>
            <option>All</option>
          </select>
          <input type="text" placeholder="Search products, brands and more" />
          <button aria-label="search">🔍</button>
        </div>

        <div className="header-icons">
          <div className="stack">
            Hello, Muhammed
            <br />
            <b>Account &amp; Lists</b>
          </div>
          <div className="stack">
            Returns
            <br />
            <b>&amp; Orders</b>
          </div>
          <div className="cart">
            <span style={{ fontSize: 22 }}>🛒</span>
            <span className="cart-count">{cartCount}</span>
            <b>Cart</b>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <a className="all">☰ All</a>
        <a href="#">Men's Clothing</a>
        <a href="#">Women's Clothing</a>
        <a href="#">Jewelery</a>
        <a href="#">Electronics</a>
        <a href="#">Today's Deals</a>
        <a href="#">Customer Service</a>
      </div>
    </header>
  );
}