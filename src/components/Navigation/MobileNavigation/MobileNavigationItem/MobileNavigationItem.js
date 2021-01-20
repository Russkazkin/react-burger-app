import React from "react";

const  mobileNavigationItem = ({link, children, active}) => (
  <a href={link}
     className={`${active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}>
    {children}
  </a>
);

export default mobileNavigationItem;
