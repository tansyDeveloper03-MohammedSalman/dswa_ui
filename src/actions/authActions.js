import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from "./types";

// Register user
export const registeruser = (userData, history) => dispatch => {
  dispatch(clearErrors());

  axios
    .post("/api/dswa/signup", userData)
    .then(res => {
      // save to localstorage
      const { token, payload } = res.data;
      const names = payload.first_name + " " + payload.last_name;

      // set token to ls
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("payload", names);

      // set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUserLogin(decoded, names));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const loginUser = userData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/dswa/login", userData)
    .then(res => {
      // save to localstorage
      const { token, payload } = res.data;
      const names = payload.first_name + " " + payload.last_name;

      // set token to ls
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("payload", names);

      // set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUserLogin(decoded, names));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const changePassowrd = (userData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/dswa/changepassword", userData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const forgotPassowrd = (userData, history) => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/dswa/forgotpassword", userData)
    .then(res => history.push())
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const resetPassowrd = (userData, history) => dispatch => {
  dispatch(clearErrors());

  axios
    .post("/api/dswa/resetPassword", userData)
    .then(res => history.push())
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const setCurrentUserLogin = (decoded, users) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userName: users
  };
};

// clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future request
  setAuthToken(false);
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
