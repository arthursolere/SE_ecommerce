import React from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shopTitle">
        <h1>Welcome to the Software Engineering Project Shop!</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {/* Go to Cart Button */}
      <div className="go-to-cart">
        <Link to="/cart" className="go-to-cart-button">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};
