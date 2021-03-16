import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import CheckoutSummary from "../../components/Order/Checkout/CheckoutSummary"
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

  checkoutCancelHandler = () => this.props.history.goBack();

  checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data')

  render() {
    const {ingredients, match} = this.props;
    let summary = <Redirect to="/"/>
    if (ingredients) {
      summary = (
        <>
          <Route path={match.path + '/contact-data'} component={ContactData}/>
          <CheckoutSummary ingredients={ingredients}
                           checkoutCanceled={this.checkoutCancelHandler}
                           checkoutContinued={this.checkoutContinueHandler}/>
        </>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
  }
}

export default connect(mapStateToProps)(Checkout);
