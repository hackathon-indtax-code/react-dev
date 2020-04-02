import React from "react";
import classes from "./BuildControl.css";
import Button from "@material-ui/core/Button";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <Button
        onClick={props.removeIngredients}
        variant="contained"
        disabled={props.isDisabled}
      >
        Less
      </Button>
      <Button onClick={props.addIngredient} variant="contained" color="primary">
        More
      </Button>
    </div>
  );
};

export default buildControl;
