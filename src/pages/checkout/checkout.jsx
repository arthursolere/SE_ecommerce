import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
    const { getTotalCartAmount,checkout} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        checkout();
        alert("Payment Successful!");
        navigate("/shop"); 
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <p>Total Amount to Pay: ${totalAmount.toFixed(2)}</p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="cardName">Cardholder Name</label>
                    <input type="text" id="cardName" name="cardName" required />
                </div>
                <div>
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" name="cardNumber" required maxLength="16" />
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input type="text" id="expiryDate" name="expiryDate" required placeholder="MM/YY" />
                </div>
                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" required maxLength="3" />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <button type="button" onClick={() => navigate("/cart")}>
                        Go Back
                    </button>
                    <button type="submit">Pay Now</button>
                </div>
            </form>
        </div>
    );
};
