import React, { Component } from  "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/Checkout/CheckoutSummary"
import ContactData from "./ContactData/ContactData";

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
      <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
      <CheckoutSummary ingredients={this.state.ingredients}
                       checkoutCanceled={this.checkoutCancelHandler}
                       checkoutContinued={this.checkoutContinueHandler} />
    </div>);
  }
}

export default Checkout;
