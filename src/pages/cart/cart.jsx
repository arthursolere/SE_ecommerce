import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (totalAmount === 0) {
            alert("The cart is empty. You can't checkout.");
        } else {
            navigate("/checkout");
        }
    };

    return (
        <div className="cart">
            <div>
                <h1>Your Items :</h1>
            </div>
            <div className="cart">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                })}
            </div>

            {totalAmount >= 0 ? (
                <div className="checkout">
                    <p>Total: ${totalAmount}</p>
                    <button onClick={() => navigate("/shop")}>Go back</button>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            ) : (
                <h1>No items yet!</h1>
            )}
        </div>
    );
};
