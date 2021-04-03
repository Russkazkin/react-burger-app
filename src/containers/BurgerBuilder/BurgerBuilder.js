import React, {Component} from "react";
import axios from "../../axios-orders";
import { connect } from "react-redux";

import { addIngredient, removeIngredient, initIngredients, purchaseInit, setAuthRedirectPath } from '../../store/actions';

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }

  updatePurchaseState = () => {
    const sum = Object.values(this.props.ingredients).reduce((sum, el) => sum + el, 0);
    return sum > 0;
  };

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({purchasing: true});
    } else {
      this.props.onSetAuthRedirectPath('/checkout')
      this.props.history.push('/auth')
    }

  }
  modalHandler = () => {
      this.setState({purchasing: false});
  }
  purchaseContinueHandler = async () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  }

  render() {
    const {ingredients, totalPrice, onIngredientAdded, onIngredientRemoved, isAuthenticated} = this.props
    const disabledInfo = {...ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }
    let orderSummary = null;

    let burger = this.state.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    if (ingredients) {
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <BuildControls ingredientAdded={onIngredientAdded}
                         ingredientRemoved={onIngredientRemoved}
                         purchasable={this.updatePurchaseState()}
                         purchasing={this.purchaseHandler}
                         disabled={disabledInfo}
                         isAuthenticated={isAuthenticated}
                         price={totalPrice.toFixed(2)} />
        </>
      );
      orderSummary = <OrderSummary total={totalPrice}
                                   closeModal={this.modalHandler}
                                   continuePurchase={this.purchaseContinueHandler}
                                   ingredients={ingredients} />
    }
    if(this.state.isError && !this.state.loading) {
      burger = <h3 className="text-center font-bold text-brown-darkest">Network problems. Please contact us by phone.</h3>
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
    ingredients: state.burgerBuilderReducer.ingredients,
    totalPrice: state.burgerBuilderReducer.totalPrice,
    error: state.burgerBuilderReducer.error,
    isAuthenticated: state.authReducer.token !== null,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingredient) => dispatch(addIngredient(ingredient)),
    onIngredientRemoved: (ingredient) => dispatch(removeIngredient(ingredient)),
    onInitIngredients: () => dispatch(initIngredients()),
    onInitPurchase: () => dispatch(purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
