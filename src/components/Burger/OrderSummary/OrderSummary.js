import React from "react";

const orderSummary = ({ingredients}) => {
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
      <p>Continue to Checkout?</p>
    </div>
  );
};

export default orderSummary;
