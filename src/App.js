import React, {Component, lazy} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {authCheckState} from "./store/actions";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./containers/Auth/Logout/Logout";

const asyncCheckout = lazy(() => import('./containers/Checkout/Checkout'));
const asyncOrders = lazy(() => import('./containers/Orders/Orders'));
const asyncAuth = lazy(() => import('./containers/Auth/Auth'));



class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

  render() {
    const {isAuthenticated} = this.props;
    let routes = (
      <Switch>
        <Redirect exact from="/" to="/burger" />
        <Route path="/burger" component={BurgerBuilder} />
        <Route path="/auth" component={asyncAuth} />
        <Redirect to="/burger" />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Redirect exact from="/" to="/burger" />
          <Route path="/burger" component={BurgerBuilder} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/burger" />
        </Switch>
      );
    }
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(authCheckState()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
