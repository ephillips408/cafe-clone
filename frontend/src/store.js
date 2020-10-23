import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { adminLoginReducer } from "./reducers/adminReducers";
import { productDetailsReducer, productListReducer } from "./reducers/productReducers";

const adminInfo = null;

const initialState = { adminLogin: { adminInfo } };
const reducer = combineReducers({
  adminLogin: adminLoginReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Allows for use of Redux DevTools (Chrome extension).
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
