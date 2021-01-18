import React from "react";

const desktopNavigationItem = ({isActive, children}) => (
  <button className={`${isActive ? 'bg-brown-darkest text-white' : 'text-gray-100 hover:bg-brown-dark hover:text-white'} px-3 py-2 rounded-md text-sm font-medium">Dashboard`}>
    {children}
  </button>
);

export default desktopNavigationItem;
