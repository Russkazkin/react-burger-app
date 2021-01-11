import React, {Component} from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import {INGREDIENT_PRICE} from "../../data/ingredientPrice"

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };
  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] < 1) return;
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler}
                       ingredientRemoved={this.removeIngredientHandler}/>
      </>
    );
  }
}

export default BurgerBuilder;
