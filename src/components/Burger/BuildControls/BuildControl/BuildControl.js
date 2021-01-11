import React from "react";

import classes from "./BuildControl.module.sass"

const buildControl = ({label, added}) => (
  <div className={"flex justify-center items-center my-1.5 container mx-auto " + classes.BuildControl}>
    <div className="w-1/4 text-left font-bold text-white">{label}</div>
    <button className="block p-1.5 mx-1.5 w-20 text-white border cursor-pointer focus:outline-none focus:outline-white bg-indigo-500 rounded-full hover:bg-indigo-300 hover:text-gray-700"
            >Less
    </button>
    <button className="block p-1.5 mx-1.5 w-20 text-white border cursor-pointer focus:outline-none focus:outline-white bg-red-500 rounded-full hover:bg-red-300 hover:text-gray-700"
            onClick={added}>More
    </button>
  </div>
);

export default buildControl;
