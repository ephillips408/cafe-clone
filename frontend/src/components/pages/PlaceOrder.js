import React from "react";
import { useSelector } from "react-redux";

import "../../styles/PlaceOrder.css";

const PlaceOrder = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { shipping } = cart;
  const {
    address,
    apartmentInfo,
    city,
    shippingState,
    postalCode,
    country,
  } = shipping;

  return (
    <div className="order-info-container">
      <div className="shipping-info">
        <h3>Shipping Info:</h3>
        <ul>
          <li className="shipping-name">Name: {shipping.name}</li>
          <li className="shipping-address">
            Address:{" "}
            {`${address} ${apartmentInfo}, ${city}, ${shippingState}, ${postalCode}, ${country}`}
          </li>
        </ul>
        <h3>Payment:</h3>
        <ul className="payment-info">
          <li>
            Please note that you will be redirected to PayPal for payment.
          </li>
        </ul>
        <h3>Order Items:</h3>
        <ul className="order-items">
          {cartItems.map((item) => (
            <li className="order-item">
              <div className="shipping-image">
                <img src={item.image} alt="product" />
              </div>
              <div className="shipping-item-info">
                <ul>
                  <li className="shipping-item-name">{item.name}</li>
                  <li className="shipping-item-price">${item.price}</li>
                  <li className="shipping-item-qty">Qty: {item.qty} </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="shipping-action">
          <h3>
            Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)} items)
            : $ {cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)}
          </h3>
          <button className="place-order-button" disabled={cartItems.length === 0}>
            Place Order
          </button>
        </div>
    </div>
  );
};

export default PlaceOrder;
