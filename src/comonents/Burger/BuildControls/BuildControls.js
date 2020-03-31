import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import Button from "@material-ui/core/Button";

const ingredientsList = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
let tempIngredientObj = {};
const buildControls = props => {
  const ingredientsObj = props.ingredients;
  for (let obj in ingredientsList) {
    tempIngredientObj[ingredientsList[obj].type] =
      ingredientsObj[ingredientsList[obj].type] > 0 ? false : true;
  }
  return (
    <div className={classes.BuildControls}>
      <div>Order Amount : {props.totalPrice}</div>
      {ingredientsList.map((value, index) => {
        return (
          <BuildControl
            isDisabled={tempIngredientObj[value.type]}
            addIngredient={() => props.addIngredient(value.type)}
            removeIngredients={() => props.removeIngredients(value.type)}
            key={value.type}
            label={value.label}
            type={value.type}
          ></BuildControl>
        );
      })}
      <Button
        onClick={props.showModal}
        disabled={!props.isDisabledPurchase}
        variant="contained"
        color="secondary"
      >
        CheckOut Order
      </Button>
    </div>
  );
};

export default buildControls;
