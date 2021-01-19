import React from "react";

const desktopNavigationItem = ({active, children, link}) => (
  <a href={link} className={`${active ? 'bg-brown-darkest text-white' : 'text-gray-100 hover:bg-brown-dark hover:text-white'} px-3 py-2 rounded-md text-sm font-medium">Dashboard`}>
    {children}
  </a>
);

export default desktopNavigationItem;
