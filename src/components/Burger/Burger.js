import React from "react";

import classes from "./Burger.module.sass";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = ({ingredients}) => {
  const transformedIngredients = Object.keys(ingredients).map(ingredientKey => {
    return [...Array(ingredients[ingredientKey])].map((_, index) => {
      return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
    });
  });
  return (
    <div className={'m-auto overflow-scroll text-center font-bold text-lg ' + classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
