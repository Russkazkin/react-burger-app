import React from 'react';

const order = ({price, ingredients}) => {
  const ingreds = [];
  for (let ingredientName in ingredients) {
    if (ingredients.hasOwnProperty(ingredientName)) {
      ingreds.push({
        name: ingredientName,
        value: ingredients[ingredientName],
      });
    }
  }
  const ingredientOutput = ingreds.map((ingredient) => <span className="capitalize inline-block mx-1 p-1.5 ring-1 rounded-md ring-brown-light"
                                                             key={ingredient.name}>
    {ingredient.name} ({ingredient.value}) </span>);

  return (<div className="w-full border border-2 border-gray-500 shadow-md p-5 my-5 mx-auto">
    <p>Ingredients: {ingredientOutput}</p>
    <p>Price: <strong>USD {parseFloat(price).toFixed(2)}</strong></p>
  </div>);
}
export default order;
