import React, {Component} from 'react';
import axios from "../../../axios-orders";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

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
    loading: false,
    formIsValid: false,
  }

  orderHandler = async (event) => {
    event.preventDefault();
    const {ingredients, price} = this.props;
    this.setState({loading: true});
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: ingredients,
      price: price,
      orderData: formData,
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

  checkValidity(value, rules) {
    let isValid = true;
    if(!rules) return true;
    if(rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {...this.state.orderForm};
    const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
    updatedFormElement.touched = true;
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let formIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[formIdentifier].valid && formIsValid;
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
