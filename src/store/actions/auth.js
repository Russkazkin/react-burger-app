import * as actionTypes from './actionTypes';
import axios from "../../axios-auth";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const logOut = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup) => {
  return async dispatch => {
    dispatch(authStart());
    try {
      const data = {
        email,
        password,
        returnSecureToken: true
      };
      let response;
      if(isSignup) {
        response = (await axios.post(`accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, data)).data;
      } else {
        response = (await axios.post(`accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, data)).data;
      }
      console.log(response);
      dispatch(authSuccess(response.idToken, response.localId));
      dispatch(checkAuthTimeout(response.expiresIn));
    } catch (error) {
      console.log(error.response);
      dispatch(authFail(error.response.data.error));
    }
  }
}
