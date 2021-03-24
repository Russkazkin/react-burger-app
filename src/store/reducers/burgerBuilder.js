import * as actionTypes from '../actions/actionTypes';
import {INGREDIENT_PRICE} from "../../data/ingredientPrice";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const addIngredient = (state, action) => {
  const addedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
  const addedIngredients = updateObject(state.ingredients, addedIngredient);
  const updatedState = {
    ingredients: addedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICE[action.ingredient],
    building: true,
  }
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const removedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
  const removedIngredients = updateObject(state.ingredients, removedIngredient);
  const updatedState = {
    ingredients: removedIngredients,
    totalPrice: state.totalPrice - INGREDIENT_PRICE[action.ingredient],
    building: true,
  }
  return updateObject(state, updatedState);
}

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    totalPrice: 4,
    error: false,
    building: false,
  })
}

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENTS: return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
    default: return state;
  }
}

export default burgerBuilder;
