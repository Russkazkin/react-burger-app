import React from "react";

import classes from "./Burger.module.sass";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = ({ingredients}) => {
  let transformedIngredients = Object.keys(ingredients).map(ingredientKey => {
    return [...Array(ingredients[ingredientKey])].map((_, index) => {
      return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
    });
  }).reduce((arr, el) => {
    return arr.concat(el);
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={'m-auto overflow-scroll text-center font-bold text-lg ' + classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
