import axios from "axios";

import {
  ADMIN_SIGNIN_REQUEST,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_FAIL,
} from "../constants/adminConstants";

const login = (username, password) => async (dispatch) => {
  dispatch({ type: ADMIN_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data }  = await axios.post("api/admins/login", { username, password });
    dispatch({ type: ADMIN_SIGNIN_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ADMIN_SIGNIN_FAIL, payload: error.message });
  }
};

export { login };