import axios from "../../axios-orders";

import * as actionTypes from './actionTypes';

export const addIngredient = ingredient => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredient
  }
};

export const removeIngredient = ingredient => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredient
  }
};

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  }
}

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients
  }
}

export const initIngredients = () => {
  return async dispatch => {
    try {
      const ingredients = (await axios.get('ingredients.json')).data;
      dispatch(setIngredients(ingredients));
    } catch (e) {
      dispatch(fetchIngredientsFailed());
    }
  }
}
