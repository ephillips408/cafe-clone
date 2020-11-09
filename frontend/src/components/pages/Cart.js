import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addToCart, removeFromCart } from "../../actions/cartActions";
import "../../styles/Cart.css";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const productId = props.match.params.id;
  const dispatch = useDispatch();

  const incrementQty = (item) => {
    if (item.qty < item.countInStock) {
      dispatch(addToCart(item.product, item.qty + 1));
    }
  };

  const decrementQty = (item) => {
    if (item.qty > 1) {
      dispatch(addToCart(item.product, item.qty - 1));
    }
    if (item.qty === 1) {
      dispatch(removeFromCart(item.product))
    }
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId));
    }
  }, []);

  return (
    <div className={cartItems.length === 1 ? "cart-one-item" : "cart"}>
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            {cartItems.length === 0 ? (
              <div className="no-items">Cart is empty</div>
            ) : (
              cartItems.map((item) => (
                <li>
                  <div className="cart-image">
                    <img src={item.image} alt="product" />
                  </div>
                  <div className="cart-item-info">
                    <ul>
                      <li className="cart-item-name">{item.name}</li>
                      <li className="cart-item-price">${item.price}</li>
                      <li className="cart-item-qty">
                        Qty: {item.qty}{" "}
                        <button
                          className="cart-button-plus"
                          onClick={() => incrementQty(item)}
                        >
                          {" "}
                          +{" "}
                        </button>{" "}
                        <button
                          className="cart-button-minus"
                          onClick={() => decrementQty(item)}
                        >
                          {" "}
                          -{" "}
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            )}
          </li>
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ({cartItems.reduce((acc, cur) => acc + cur.qty, 0)} items) :
          $ {cartItems.reduce((acc, cur) => acc + cur.price * cur.qty, 0)}
        </h3>
        <button className="checkout-button" disabled={cartItems.length === 0}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
