import React from "react";

const backdrop = ({show, backdropOff}) => (
  show ? <div onClick={backdropOff} className="w-full h-full fixed z-30 top-0 left-0 bg-black bg-opacity-50"> </div> : null
)

export default backdrop;
