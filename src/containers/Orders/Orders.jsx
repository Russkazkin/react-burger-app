import React, { Component } from 'react';
import axios from "../../axios-orders";

import Order from '../../components/Order/Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  async componentDidMount() {

  }

  render() {
    return (
      <div className="container m-auto">
        {this.state.orders.map((order) => <Order key={order.id} {...order} />)}
      </div>

    );
  }
}

export default withErrorHandler(Orders, axios);
