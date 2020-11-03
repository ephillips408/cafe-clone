import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { adminLoginReducer } from "./reducers/adminReducers";
import { cartReducer } from "./reducers/cartReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const adminInfo = null;
const cartItems = []

const initialState = { cart: { cartItems }, adminLogin: { adminInfo } };
const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Allows for use of Redux DevTools (Chrome extension).
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
