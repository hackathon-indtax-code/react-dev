import React from "react";
import Button from "@material-ui/core/Button";

const orderSummary = props => {
  const orderSummaryItemsList = Object.keys(props.ingrediants);
  const orderSumaryViewObj = orderSummaryItemsList.map((igKey, index) => {
    return (
      <div key={igKey + "" + index} style={{ marginBottom: "10px" }}>
        <span style={{ width: "3em", display: "inline-block" }}>{igKey}</span>
        <span> : {props.ingrediants[igKey]}</span>
      </div>
    );
  });
  return (
    <div>
      <h3>Kindly verify the Order Sumamry:</h3>

      <div>{orderSumaryViewObj}</div>

      <div>
        <span>
          <strong>Total Price to be payed</strong> :
        </span>
        Rs {props.totalPrice}
      </div>
      <br />
      <div>
        <span style={{ marginRight: "10px" }}>
          <Button onClick={props.hideBckDrop} variant="contained">
            Cancel
          </Button>
        </span>
        <span>
          <Button variant="contained" color="primary">
            Confirm checkout
          </Button>
        </span>
      </div>
    </div>
  );
};

export default orderSummary;
