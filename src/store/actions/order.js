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

export const purchaseBurgerStart = order => {
  return async dispatch => {
    try {
      const response = (await axios.post('orders.json', order)).data;
      dispatch(purchaseBurgerSuccess(response, order));
    } catch (error) {
      dispatch(purchaseBurgerFail(error));
    }
  }
}
