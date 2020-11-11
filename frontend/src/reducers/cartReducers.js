import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING } from "../constants/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(
        (ele) => ele.product === item.product
      );

      if (product) {
        return {
          cartItems: state.cartItems.map((ele) =>
            ele.product === product.product ? item : ele
          ),
        };
        // The second "product" is the ID of the product.
        // The "else" part keeps the previous value of the cart item in the cart.
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (ele) => ele.product !== action.payload
        ),
      };
    case CART_SAVE_SHIPPING:
      return {...state, shipping: action.payload}  
    default:
      return state;
  }
};

export { cartReducer };
