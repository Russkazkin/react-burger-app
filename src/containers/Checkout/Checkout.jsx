import React, { Component } from  "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/Checkout/CheckoutSummary"
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query) {
      if(param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = parseInt(param[1]);
      }
    }
    this.setState({ingredients: ingredients, totalPrice: price});
  }

  checkoutCancelHandler = () => this.props.history.goBack();

  checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data')

  render() {
    return (<div>
      <Route path={this.props.match.path + '/contact-data'}
             render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />)} />
      <CheckoutSummary ingredients={this.state.ingredients}
                       checkoutCanceled={this.checkoutCancelHandler}
                       checkoutContinued={this.checkoutContinueHandler} />
    </div>);
  }
}

export default Checkout;
