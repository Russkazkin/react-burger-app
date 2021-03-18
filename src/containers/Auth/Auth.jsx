import React, {Component} from "react";
import Input from "../../components/UI/Input/Input";
import { checkValidity } from "../../utilities/validation";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email address'
        },
        value: '',
        validation: {
          require: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          require: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };
    this.setState({controls: updatedControls});
  }

  render() {
    const formElementsArray = [];
    for(let key in this.state.controls) {
      if (this.state.controls.hasOwnProperty(key)) {
        formElementsArray.push({
          id: key,
          config: this.state.controls[key],
        });
      }
    }
    let form = (
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
              className="disabled:opacity-40 w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-brown-darkest rounded-lg hover:bg-brown-dark hover:to-brown focus:shadow-outline focus:outline-none focus:ring-2 ring-brown-lightest ring-offset-current ring-offset-2">
              Sign-in
            </button>
          </div>
        </div>
      </form>
    )
    return (
      <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
        <h4 className="text-center font-bold text-lg mb-3">Enter your contact data</h4>
        <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <div className="flex flex-wrap -m-2">
            {form}
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;
