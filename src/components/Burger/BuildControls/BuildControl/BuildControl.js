import React from "react";

import classes from "./BuildControl.module.sass"

const buildControl = ({label}) => (
  <div className={"flex justify-between items-center my-1.5 " + classes.BuildControl}>
    <div>{label}</div>
    <button className="block p-1.5 mx-1.5 w-20 border cursor-pointer outline-none">Less</button>
    <button className="block p-1.5 mx-1.5 w-20 border cursor-pointer outline-none">More</button>
  </div>
);

export default buildControl;
