import React from "react";

const COLUMNS = [
  {
    title: "Get to Know Us",
    items: ["About shopKart", "Careers", "Press Releases", "Science of shopKart"],
  },
  {
    title: "Connect with Us",
    items: ["Facebook", "Twitter", "Instagram"],
  },
  {
    title: "Make Money with Us",
    items: ["Sell on shopKart", "Become an Affiliate", "Advertise Your Products"],
  },
  {
    title: "Let Us Help You",
    items: ["Your Account", "Returns Centre", "Shipping Rates", "Help"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="footer-back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      <div className="footer-columns">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        © 2026 shopKart, Inc. — Demo product list page (data shaped like
        fakestoreapi.com)
      </div>
    </footer>
  );
}