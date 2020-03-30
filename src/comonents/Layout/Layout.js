import React from "react";
import Aux from "../../hoc/Auxilary";

const layout = props => {
  return (
    <Aux>
      <div>Tool Bar, Side Drawer, Back Drop</div>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
