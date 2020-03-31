import React from "react";

const orderSummary = props => {
  const orderSummaryItemsList = Object.keys(props.ingrediants);
  const orderSumaryViewObj = orderSummaryItemsList.map((igKey, index) => {
    return (
      <p key={igKey + "" + index}>
        <span>
          <span style={{ wiidth: "20%" }}>{igKey}</span> :
          {props.ingrediants[igKey]}
        </span>
        <br />
      </p>
    );
  });
  return (
    <div>
      <p>Kindly verify the Order Sumamry:</p>
      <br />
      <div>{orderSumaryViewObj}</div>
    </div>
  );
};

export default orderSummary;
