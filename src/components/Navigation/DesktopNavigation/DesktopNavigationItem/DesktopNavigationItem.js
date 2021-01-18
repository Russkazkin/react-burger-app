import React from "react";

const desktopNavigationItem = ({isActive, children}) => (
  <button className={`${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium">Dashboard`}>
    {children}
  </button>
);

export default desktopNavigationItem;
