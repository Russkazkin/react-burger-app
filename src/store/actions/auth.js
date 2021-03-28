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
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
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
      const expirationDate = new Date(new Date().getTime() + response.expiresIn * 1000);
      localStorage.setItem('token', response.idToken);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('userId', response.localId);
      dispatch(authSuccess(response.idToken, response.localId));
      dispatch(checkAuthTimeout(response.expiresIn));
    } catch (error) {
      dispatch(authFail(error.response.data.error));
    }
  }
}

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
  }
}

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logOut());
      return;
    }
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    const userId = localStorage.getItem('userId');
    if (expirationDate > new Date()) {
      dispatch(authSuccess(token, userId));
      dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    } else {
      dispatch(logOut());
    }
  }
}
