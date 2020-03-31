import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../comonents/Burger/Burger";
import BuildControls from "../../comonents/Burger/BuildControls/BuildControls";
import Modal from "../../comonents/UI/Modal/Modal";
import OrderSummary from "../../comonents/UI/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0.0,
      bacon: 0.0,
      cheese: 0.0,
      meat: 0.0
    },
    totalPurchasePrice: 0,
    isPuchaseValid: false,
    showOrderSumamryModal: false
  };
  INGREDIENT_PRICE_OBJECT = { salad: 1.15, bacon: 1.0, cheese: 2.1, meat: 1.1 };
  updateIsPurchaseValid(newPurchaseprice) {
    let isValid = false;
    isValid = newPurchaseprice > 0 ? true : false;
    this.setState({ isPuchaseValid: isValid });
  }

  showModal() {
    this.setState({ showOrderSumamryModal: true });
  }
  addBurgerIngredients(burgerType) {
    let burgerIngredientObj = { ...this.state.ingredients };
    burgerIngredientObj[burgerType] = burgerIngredientObj[burgerType] + 1;
    let newPurchaseprice = this.state.totalPurchasePrice;
    newPurchaseprice =
      newPurchaseprice + this.INGREDIENT_PRICE_OBJECT[burgerType];

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
      newPurchaseprice =
        newPurchaseprice - this.INGREDIENT_PRICE_OBJECT[burgerType];

      this.setState({
        ingredients: burgerIngredientObj,
        totalPurchasePrice: newPurchaseprice
      });
      this.updateIsPurchaseValid(newPurchaseprice);
    }
  }

  hideBackDropScreen() {
    this.setState({ showOrderSumamryModal: false });
  }

  render() {
    return (
      <Aux>
        {this.state.showOrderSumamryModal ? (
          <Modal
            showModal={this.state.showOrderSumamryModal}
            hideBckDrop={this.hideBackDropScreen.bind(this)}
          >
            <OrderSummary ingrediants={this.state.ingredients}></OrderSummary>
          </Modal>
        ) : null}

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          showModal={this.showModal.bind(this)}
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
