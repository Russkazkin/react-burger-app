import axios from "../../axios-orders";

import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, data) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id,
    data
  }
}

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  }
};

export const purchaseBurger = order => {
  return async dispatch => {
    dispatch(purchaseBurgerStart());
    try {
      const response = (await axios.post('orders.json', order)).data;
      dispatch(purchaseBurgerSuccess(response.name, order));
    } catch (error) {
      dispatch(purchaseBurgerFail(error));
    }
  }
}
