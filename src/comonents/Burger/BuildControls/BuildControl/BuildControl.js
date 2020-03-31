import React from "react";
import classes from "./BuildControl.module.css";
import Button from "@material-ui/core/Button";

const buildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <p className={classes.Label}>{props.label}</p>
      <Button variant="contained" type={props.label}>
        Less
      </Button>
      <Button variant="contained" color="primary" type={props.label}>
        More
      </Button>
    </div>
  );
};

export default buildControl;
