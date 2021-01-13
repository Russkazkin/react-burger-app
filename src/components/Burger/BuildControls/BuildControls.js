import React from "react";
import classes from "./BuildControls.module.sass";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = ({ingredientAdded, ingredientRemoved, disabled, price, purchasable, purchasing}) => (
  <div className={"w-full flex flex-col text-center shadow-sm m-auto py-2.5 " + classes.BuildControls}>
    <div className="py-5 text-white">Current Price: <strong>${price}</strong></div>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => ingredientAdded(ctrl.type)}
                    removed={() => ingredientRemoved(ctrl.type)}
                    disabled={disabled[ctrl.type]} />
    ))}
    <div className="my-5">
      <button onClick={purchasing} disabled={!purchasable} className="disabled:opacity-50 block p-1.5 mx-auto w-40 text-white border cursor-pointer focus:outline-none focus:outline-white bg-green-500 rounded-full hover:bg-green-300 hover:text-gray-700">
        ORDER NOW
      </button>
    </div>
  </div>
);

export default buildControls;
