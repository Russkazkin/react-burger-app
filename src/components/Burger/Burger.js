import React from "react";

import classes from "./Burger.sass";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const burger = (props) => {
  return (
    <div className={'m-auto overflow-scroll text-center font-bold text-lg ' + classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;
