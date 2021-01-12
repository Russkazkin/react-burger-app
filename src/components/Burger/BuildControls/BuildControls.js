import React from "react";
import classes from "./BuildControls.module.sass";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = ({ingredientAdded, ingredientRemoved, disabled, price}) => (
  <div className={"w-full flex flex-col text-center shadow-sm m-auto py-2.5 " + classes.BuildControls}>
    <div className="py-5 text-white">Current Price: <strong>${price}</strong></div>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => ingredientAdded(ctrl.type)}
                    removed={() => ingredientRemoved(ctrl.type)}
                    disabled={disabled[ctrl.type]} />
    ))}
  </div>
);

export default buildControls;
