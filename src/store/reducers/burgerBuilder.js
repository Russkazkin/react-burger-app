import * as actionTypes from '../actions/actionTypes';
import {INGREDIENT_PRICE} from "../../data/ingredientPrice";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};
const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient]
      };
    case actionTypes.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient]
      };
    default:
      return state;
  }
}

export default burgerBuilder;
