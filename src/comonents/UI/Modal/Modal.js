import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxilary from "../../../hoc/Auxilary";

const modal = props => {
  return (
    <Auxilary>
      <Backdrop hideBackDrop={props.hideBckDrop} show={props.showModal} />
      <div className={classes.Modal}>{props.children}</div>
    </Auxilary>
  );
};

export default modal;
