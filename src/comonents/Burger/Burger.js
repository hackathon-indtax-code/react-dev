import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.css";

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
  //check if ingredients exists:
  if (burgerIngredientsElement && burgerIngredientsElement.length > 0) {
    let listlength = burgerIngredientsElement.reduce((prevValue, value) => {
      return value.length + prevValue;
    }, 0);
    burgerIngredientsElement =
      listlength > 0 ? (
        burgerIngredientsElement
      ) : (
        <div>No Ingredients Selected!</div>
      );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {burgerIngredientsElement}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
};

export default burger;
