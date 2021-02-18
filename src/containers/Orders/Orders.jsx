import React, { Component } from 'react';
import Order from '../../components/Order/Order';

class Orders extends Component {
  render() {
    return (
      <div className="container m-auto">
        <Order />
        <Order />
        <Order />
      </div>

    );
  }
}

export default Orders;
