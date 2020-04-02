import React, { Component } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxilary from "../../../hoc/Auxilary";

class Modal extends Component {
  // shouldComponentUpdate(nextprop, nextState) {}
  componentWillUpdate() {
    console.log("Modal component updated[]...");
  }

  render() {
    return (
      <Auxilary>
        <Backdrop
          hideBackDrop={this.props.hideBckDrop}
          show={this.props.showModal}
        />
        <div className={classes.Modal}>{this.props.children}</div>
      </Auxilary>
    );
  }
}

export default Modal;
