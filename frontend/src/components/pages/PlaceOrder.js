import { PromiseProvider } from "mongoose";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";

import "../../styles/PlaceOrder.css";

const PlaceOrder = (props) => {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
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

  const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        ...cart,
        orderItems: cart.cartItems,
        shippingAddress: cart.shipping,
        totalPrice: totalPrice,
      })
    );
    // Destructure the cart, and then set orderItems to cartItems.
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]); // If success is true, function will run

  return (
    <div className={cartItems.length === 1 ? "order-one-item" : "order"}>
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
          Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)} items) :
          $ {totalPrice}
        </h3>
        <button
          className="place-order-button"
          disabled={cartItems.length === 0}
          onClick={() => placeOrderHandler()}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
