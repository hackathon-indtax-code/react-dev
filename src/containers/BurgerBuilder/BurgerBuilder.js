import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../comonents/Burger/Burger";
import BuildControls from "../../comonents/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    },
    totalPurchasePrice: 0,
    isPuchaseValid: false
  };

  addBurgerIngredients(burgerType) {
    let burgerIngredientObj = { ...this.state.ingredients };
    burgerIngredientObj[burgerType] = burgerIngredientObj[burgerType] + 1;
  }
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
