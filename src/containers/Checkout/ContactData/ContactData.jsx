import React, {Component} from 'react';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  }

  render() {
    return (
      <section className="text-gray-700 body-font">
        <div className="container px-8 pt-24 pb-24 mx-auto lg:px-4">
          <h4 className="text-center font-bold text-lg mb-3">Enter your contact data</h4>
          <div className="flex flex-col w-full p-8 mx-auto mt-10 border rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
            <div className="flex flex-wrap -m-2">
              <div className="w-full p-2">
                <div className="relative">
                  <input type="text" id="name" name="name" placeholder="Your name"
                         className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>
                </div>
              </div>
              <div className="w-full p-2">
                <input type="email" id="email" name="email" placeholder="Your email"
                       className="w-full px-4 py-2 mr-4 text-base text-blue-700 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <input type="text" id="street" name="street" placeholder="Street"
                         className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <input type="text" id="postal" name="postal" placeholder="Postal code"
                         className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>
                </div>
              </div>
              <div className="w-full p-2 ">
                <button
                  className="w-full px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-brown-darkest rounded-lg hover:bg-brown-dark hover:to-brown focus:shadow-outline focus:outline-none focus:ring-2 ring-brown-lightest ring-offset-current ring-offset-2">Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactData;
