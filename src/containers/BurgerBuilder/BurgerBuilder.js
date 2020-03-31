import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../comonents/Burger/Burger";
import BuildControls from "../../comonents/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPurchasePrice: 0,
    isPuchaseValid: false
  };

  updateIsPurchaseValid(newPurchaseprice) {
    let isValid = false;
    isValid = newPurchaseprice > 0 ? true : false;
    this.setState({ isPuchaseValid: isValid });
  }

  addBurgerIngredients(burgerType) {
    let burgerIngredientObj = { ...this.state.ingredients };
    burgerIngredientObj[burgerType] = burgerIngredientObj[burgerType] + 1;
    let newPurchaseprice = this.state.totalPurchasePrice;
    newPurchaseprice = newPurchaseprice + 15.25;

    this.setState({
      ingredients: burgerIngredientObj,
      totalPurchasePrice: newPurchaseprice
    });
    this.updateIsPurchaseValid(newPurchaseprice);
  }

  removeBurgerIngredients(burgerType) {
    let burgerIngredientObj = { ...this.state.ingredients };
    if (burgerIngredientObj[burgerType] > 0) {
      burgerIngredientObj[burgerType] = burgerIngredientObj[burgerType] - 1;
      let newPurchaseprice = this.state.totalPurchasePrice;
      newPurchaseprice = newPurchaseprice - 15.25;

      this.setState({
        ingredients: burgerIngredientObj,
        totalPurchasePrice: newPurchaseprice
      });
      this.updateIsPurchaseValid(newPurchaseprice);
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          totalPrice={this.state.totalPurchasePrice}
          isDisabledPurchase={this.state.isPuchaseValid}
          addIngredient={this.addBurgerIngredients.bind(this)}
          removeIngredients={this.removeBurgerIngredients.bind(this)}
        ></BuildControls>
      </Aux>
    );
  }
}

export default BurgerBuilder;
