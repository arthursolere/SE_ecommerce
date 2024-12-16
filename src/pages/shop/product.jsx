import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}{cartItemCount > 0 && <> ({cartItemCount})</>}</b>
        </p>
        <p> ${price}</p>
      </div>

      {/* Add To Cart button */}
      <button
        className="cartButton addToCartBttn"
        onClick={() => addToCart(id)}
      >
        Add
      </button>

      {/* Remove button (only show if the product is in the cart) */}
      {cartItemCount > 0 && (
        <button
          className="cartButton removeFromCartBttn"
          onClick={() => removeFromCart(id)}
        >
          Remove
        </button>
      )}
    </div>
  );
};
