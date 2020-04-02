import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class OrderSummary extends Component {
  componentWillMount() {
    console.log("OrderSummary component Mount[]...");
  }
  render() {
    console.log("orderSummary summary component[]");
    const orderSummaryItemsList = Object.keys(this.props.ingrediants);
    const orderSumaryViewObj = orderSummaryItemsList.map((igKey, index) => {
      return (
        <div key={igKey + "" + index} style={{ marginBottom: "10px" }}>
          <span style={{ width: "3em", display: "inline-block" }}>{igKey}</span>
          <span> : {this.props.ingrediants[igKey]}</span>
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
          Rs {this.props.totalPrice}
        </div>
        <br />
        <div>
          <span style={{ marginRight: "10px" }}>
            <Button onClick={this.props.hideBckDrop} variant="contained">
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
  }
}

export default OrderSummary;
