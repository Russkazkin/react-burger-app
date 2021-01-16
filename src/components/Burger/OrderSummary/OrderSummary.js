import React from "react";

const orderSummary = ({ingredients, closeModal, continuePurchase, total}) => {
  const ingredientSummary = Object.keys(ingredients)
    .map((ingredient, index) =>
      <li key={index} className="capitalize list-disc list-inside">{ingredient}: {ingredients[ingredient]}</li>);
  return (
    <div className="p-8">
      <h3 className="text-xl font-bold mb-4">Your Order</h3>
      <p className="mb-4">A delicious burger with the following ingredients:</p>
      <ul className="ml-4 mb-4">
        {ingredientSummary}
      </ul>
      <p className="mb-4">Total: <strong>${total.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <div className="flex justify-center mt-8">
        <button onClick={closeModal} className="mr-4 disabled:opacity-50 block py-1.5 px-4 text-white border cursor-pointer focus:outline-none focus:outline-white bg-red-500 rounded-full hover:bg-red-300 hover:text-gray-700">
          Cancel
        </button>
        <button onClick={continuePurchase} className="disabled:opacity-50 block py-1.5 px-4 text-white border cursor-pointer focus:outline-none focus:outline-white bg-green-500 rounded-full hover:bg-green-300 hover:text-gray-700">
          Continue
        </button>
      </div>
    </div>
  );
};

export default orderSummary;
