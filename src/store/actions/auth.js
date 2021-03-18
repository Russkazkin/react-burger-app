import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());
    // ...
  }
}
