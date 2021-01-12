import React from "react";

const modal = (props) => (
  <div className="fixed z-500 bg-white w-3/4 border border-gray-300 rounded-sm shadow-md p-4 bottom-1/2 box-border transition duration-300 ease-in-out sm:w-128 right-1/2 transform translate-x-1/2 translate-y-1/2">
    {props.children}
  </div>
);

export default modal;
