import React, {Component} from 'react';
import axios from "../../../axios-orders";
import { connect } from "react-redux";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import { purchaseBurger } from "../../../store/actions";
import { checkValidity } from "../../../shared/validation";
import {updateObject} from "../../../shared/utility";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your email',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your address',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your postal code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6,
        },
        valid: false,
        touched: false,
      },
      city: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your city',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your country',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          label: 'Delivery type',
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
            {value: 'standard', displayValue: 'Standard'},
          ],
        },
        value: 'fastest',
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
  }

  orderHandler = async (event) => {
    event.preventDefault();
    const {ingredients, price, onOrderBurger, userId} = this.props;
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      userId,
      ingredients,
      price,
      orderData: formData,
    }
    onOrderBurger(order, this.props.token);
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
      touched: true,
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation)
    });
    const updatedOrderForm = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let formIdentifier in updatedOrderForm) {
      if (updatedOrderForm.hasOwnProperty(formIdentifier)) {
        formIsValid = updatedOrderForm[formIdentifier].valid && formIsValid;
      }
    }
    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  };

  render() {
    const formElementsArray = [];
    for(let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form  = (
      <form onSubmit={this.orderHandler} className="w-full">
        <div className="w-full">
          {formElementsArray.map(formElement => <Input elementType={formElement.config.elementType}
                                                       elementConfig={formElement.config.elementConfig}
                                                       value={formElement.config.value}
                                                       name={formElement.id}
                                                       valid={formElement.config.valid}
                                                       touched={formElement.config.touched}
                                                       changed={(event) => this.inputChangedHandler(event, formElement.id)}
                                                       key={formElement.id}/>)}
          <div className="w-full p-2 ">
            <button
              disabled={!this.state.formIsValid}
              className="disabled:opacity-40 w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-brown-darkest rounded-lg hover:bg-brown-dark hover:to-brown focus:shadow-outline focus:outline-none focus:ring-2 ring-brown-lightest ring-offset-current ring-offset-2">Order
            </button>
          </div>
        </div>
      </form>
    );
    if (this.loading) form = <Spinner />
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

const mapStateToProps = state => {
  return {
    ingredients: state.burgerBuilderReducer.ingredients,
    price: state.burgerBuilderReducer.totalPrice,
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (data, token) => dispatch(purchaseBurger(data, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
