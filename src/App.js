import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Redirect exact from="/" to="/burger" />
          <Route path="/burger" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
