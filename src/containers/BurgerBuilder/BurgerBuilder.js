import React, {Component} from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {INGREDIENT_PRICE} from "../../data/ingredientPrice";


class BurgerBuilder extends Component {
  state = {
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    isError: false,
  };

  /*async componentDidMount() {
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
  }*/

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
    queryParams.push('price=' + this.state.totalPrice);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
  }

  render() {
    const {ingredients, onIngredientAdded, onIngredientRemoved} = this.props
    const disabledInfo = {...ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }
    let orderSummary = null;

    let burger = <Spinner />;
    if (ingredients) {
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <BuildControls ingredientAdded={onIngredientAdded}
                         ingredientRemoved={onIngredientRemoved}
                         purchasable={this.state.purchasable}
                         purchasing={this.purchaseHandler}
                         disabled={disabledInfo}
                         price={this.state.totalPrice.toFixed(2)} />
        </>
      );
      orderSummary = <OrderSummary total={this.state.totalPrice}
                                   closeModal={this.modalHandler}
                                   continuePurchase={this.purchaseContinueHandler}
                                   ingredients={ingredients} />
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

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  }
};
const mapDispatchToProps = dispantch => {
  return {
    onIngredientAdded: (ingredient) => dispantch({type: actionTypes.ADD_INGREDIENT, ingredient}),
    onIngredientRemoved: (ingredient) => dispantch({type: actionTypes.REMOVE_INGREDIENTS, ingredient}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
