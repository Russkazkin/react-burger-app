import axios from "../../axios-orders";

import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, data) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    id,
    data
  }
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error
  }
};

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
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  }
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error
  }
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
};

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(fetchOrdersStart());
      const data = (await axios.get('orders.json')).data;
      const orders = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          orders.push({
            id: key,
            ...data[key]
          });
        }
      }
      dispatch(fetchOrdersSuccess(orders));
    } catch (e) {
      dispatch(fetchOrdersFail(e))
    }
  }
};
