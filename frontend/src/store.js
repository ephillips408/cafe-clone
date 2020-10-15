import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { adminLoginReducer } from "./reducers/adminReducers";

const adminInfo = null;

const initialState = { adminLogin: { adminInfo } };
const reducer = combineReducers({
  adminLogin: adminLoginReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Allows for use of Redux DevTools (Chrome extension).
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
