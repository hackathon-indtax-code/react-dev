import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const burger = props => {
  let burgerIngredientsElement = null;
  const ingredientData = props.ingredients;
  burgerIngredientsElement = Object.keys(ingredientData).map(igkey => {
    return [...Array(ingredientData[igkey])].map((_, index) => {
      return (
        <BurgerIngredient key={igkey + index} type={igkey}></BurgerIngredient>
      );
    });
  });

  burgerIngredientsElement = burgerIngredientsElement ? (
    burgerIngredientsElement
  ) : (
    <div>No ingredients selected</div>
  );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {burgerIngredientsElement}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
