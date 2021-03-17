import * as actionTypes from '../actions/actionTypes';
import {INGREDIENT_PRICE} from "../../data/ingredientPrice";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};
const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const addedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
      const addedIngredients = updateObject(state.ingredients, addedIngredient);
      const updatedStateForAdd = {
        ingredients: addedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient]
      }
      return updateObject(state, updatedStateForAdd);
    case actionTypes.REMOVE_INGREDIENTS:
      const removedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
      const removedIngredients = updateObject(state.ingredients, removedIngredient);
      const updatedStateForRemove = {
        ingredients: removedIngredients,
        totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient]
      }
      return updateObject(state, updatedStateForRemove);
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          salad: action.ingredients.salad,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
      })
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {error: true});
    default:
      return state;
  }
}

export default burgerBuilder;
