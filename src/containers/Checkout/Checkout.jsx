import React, { Component } from  "react";

import CheckoutSummary from "../../components/Order/Checkout/CheckoutSummary"

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    }
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query) {
      ingredients[param[0]] = parseInt(param[1]);
    }
    this.setState({ingredients: ingredients});
  }

  checkoutCancelHandler = () => this.props.history.goBack();

  checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data')

  render() {
    return (<div>
      <CheckoutSummary ingredients={this.state.ingredients}
                       checkoutCanceled={this.checkoutCancelHandler}
                       checkoutContinued={this.checkoutContinueHandler} />
    </div>);
  }
}

export default Checkout;
