import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const ingredientsList = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {ingredientsList.map((value, index) => {
        return (
          <BuildControl
            key={value.type}
            label={value.label}
            type={value.type}
          ></BuildControl>
        );
      })}
    </div>
  );
};

export default buildControls;
