import React from "react";
import classes from "./BuildControls.module.sass";
import BuildControl from "./BuildControl/BuildControl"

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'},
];

const buildControls = ({ingredientAdded, ingredientRemoved}) => (
  <div className={"w-full flex flex-col text-center shadow-sm m-auto py-2.5 " + classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label}
                    label={ctrl.label}
                    added={() => ingredientAdded(ctrl.type)}
                    removed={() => ingredientRemoved(ctrl.type)}/>
    ))}
  </div>
);

export default buildControls;
