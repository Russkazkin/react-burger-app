import React, {Component} from 'react';
import axios from "../../../axios-orders";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {

    },
    loading: false,
  }

  orderHandler = async () => {
    const {ingredients, price} = this.props;
    this.setState({loading: true});
    const order = {
      ingredients: ingredients,
      price: price,
      customer: {
        name: 'Test Name',
        address: {
          street: 'Teststreet 1',
          zipCode: '64645',
          city: 'Testenberg',
          country: 'Neverland',
        },
        email: 'test@example.com',
      },
      deliveryMethod: 'fastest',
    }
    try {
      const response = (await axios.post('orders.json', order)).data;
      console.log(response);
    } catch (error) {
      console.log(error.response);
    } finally {
      this.setState({
        loading: false,
      });
    }
    this.props.history.push('/');
  }

  render() {
    let form  = (
      <div className="w-full">
        <Input type="text" id="name" name="name" placeholder="Your name" />
        <Input type="email" id="email" name="email" placeholder="Your email" />
        <Input type="text" id="street" name="street" placeholder="Street" />
        <Input type="text" id="postal" name="postal" placeholder="Postal code" />
        <div className="w-full p-2 ">
          <button
            onClick={this.orderHandler}
            className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-brown-darkest rounded-lg hover:bg-brown-dark hover:to-brown focus:shadow-outline focus:outline-none focus:ring-2 ring-brown-lightest ring-offset-current ring-offset-2">Order
          </button>
        </div>
      </div>
    );
    if (this.state.loading) form = <Spinner />
    return (<section className="text-gray-700 body-font">
      <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
        <h4 className="text-center font-bold text-lg mb-3">Enter your contact data</h4>
        <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <div className="flex flex-wrap -m-2">
            {form}
          </div>
        </div>
      </div>
    </section>);
  }
}

export default ContactData;
