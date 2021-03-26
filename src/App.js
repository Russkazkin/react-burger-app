import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {authCheckState} from "./store/actions";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";



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
        <Route path="/auth" component={Auth} />
        <Redirect to="/burger" />
      </Switch>
    );

    if (isAuthenticated) {
      routes = (
        <Switch>
          <Redirect exact from="/" to="/burger" />
          <Route path="/burger" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
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
