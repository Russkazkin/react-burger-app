import React from "react";

const desktopNavigationItem = ({title, isActive}) => (
  <button className={`${isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium">Dashboard`}>
    {title}
  </button>
);

export default desktopNavigationItem;
