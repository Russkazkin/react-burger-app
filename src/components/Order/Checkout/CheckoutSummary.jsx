import React from "react";

import Burger from "../../Burger/Burger"

const checkoutSummary = ({ingredients}) => {
  return (
    <div className="text-center w-4/5 m-auto">
      <h1 className="text-2xl">We hope it tastes well!</h1>
      <div className="w-full m-auto">
        <Burger ingredients={ingredients}/>
      </div>
      <div className="flex justify-center mb-40">
        <button className="disabled:opacity-50 block p-1.5 mx-1.5 w-20 text-white border cursor-pointer focus:outline-none focus:outline-white bg-indigo-500 rounded-full hover:bg-indigo-300 hover:text-gray-700"
                onClick={() => {}}>Continue
        </button>
        <button className="block p-1.5 mx-1.5 w-20 text-white border cursor-pointer focus:outline-none focus:outline-white bg-red-500 rounded-full hover:bg-red-300 hover:text-gray-700"
                onClick={() => {}}>Cancel
        </button>
      </div>
    </div>
  );
}
export default checkoutSummary;
