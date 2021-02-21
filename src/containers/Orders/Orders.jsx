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
    try {
      const data = (await axios.get('orders.json')).data;
      const orders = [];
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          orders.push({
            id: key,
            ...data[key]
          });
        }
      }
      this.setState({orders: orders});
      console.log(this.state.orders);
    } catch (e) {
      console.log(e.response);
    } finally {
      this.setState({loading: false});
    }
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
