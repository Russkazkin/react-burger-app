import React, { Component } from 'react';
import axios from "../../axios-orders";
import { connect } from "react-redux";

import Order from '../../components/Order/Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {fetchOrders} from "../../store/actions";
import Spinner from "../../components/UI/Spinner/Spinner"

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  }

  async componentDidMount() {
    const {onFetchOrders, token, userId} = this.props;
    onFetchOrders(token, userId);
  }

  render() {
    const {orders, loading} = this.props;
    let ordersRender = <Spinner />;
    if (!loading) {
      ordersRender = orders.map((order) => <Order key={order.id} {...order} />);
    }
    return (
      <div className="container m-auto">
        {ordersRender}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));
