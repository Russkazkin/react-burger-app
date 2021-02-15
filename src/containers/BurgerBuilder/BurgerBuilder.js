import React, {Component} from "react";
import axios from "../../axios-orders";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {INGREDIENT_PRICE} from "../../data/ingredientPrice";


class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    isError: false,
  };

  async componentDidMount() {
    this.setState({loading: true});
    this.setState({isError: false});
    try {
      const ingredients = (await axios.get('ingredients.json')).data;
      this.setState({ingredients: ingredients});
      this.updatePurchaseState(this.state.ingredients);
    } catch (e) {
      this.setState({isError: true});
      console.log(e.response);
    } finally {
      this.setState({loading: false});
    }
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0})
  };

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    if(this.state.ingredients[type] < 1) return;
    const updatedCount = this.state.ingredients[type] - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }
  modalHandler = () => {
      this.setState({purchasing: false});
  }
  purchaseContinueHandler = async () => {
    const queryParams = [];
    for (let ingredient in this.state.ingredients) {
      if(this.state.ingredients.hasOwnProperty(ingredient)) {
        queryParams.push(encodeURIComponent(ingredient) + '=' + encodeURIComponent(this.state.ingredients[ingredient]));
      }
    }
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
    /*this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Test Name',
        address: {
          street: 'Teststreet 1',
          zipCode: '64645',
          city: 'Testenberg',
          country: 'Neverland',
        },
        email: 'test@example.com',
      },
      deliveryMethod: 'fastest',
    }
    try {
      const response = (await axios.post('orders.json', order)).data;
      console.log(response);
    } catch (error) {
      console.log(error.response);
    } finally {
      this.setState({
        purchasing: false,
        loading: false,
      });
    }*/
  }

  render() {
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }
    let orderSummary = null;

    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls ingredientAdded={this.addIngredientHandler}
                         ingredientRemoved={this.removeIngredientHandler}
                         purchasable={this.state.purchasable}
                         purchasing={this.purchaseHandler}
                         disabled={disabledInfo}
                         price={this.state.totalPrice.toFixed(2)} />
        </>
      );
      orderSummary = <OrderSummary total={this.state.totalPrice}
                                   closeModal={this.modalHandler}
                                   continuePurchase={this.purchaseContinueHandler}
                                   ingredients={this.state.ingredients} />
    }
    if(this.state.isError && !this.state.loading) {
      burger = <h3 className="text-center font-bold text-brown-darkest">Network problems. Please contact us by phone.</h3>
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal show={this.state.purchasing} closeModal={this.modalHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
