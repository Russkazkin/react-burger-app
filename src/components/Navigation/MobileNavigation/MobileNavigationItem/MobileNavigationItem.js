import React from "react";

const  mobileNavigationItem = ({link, children, active}) => (
  <a href={link}
     className={`${active ? 'bg-brown-darkest text-white' : 'text-gray-100 hover:bg-brown-dark hover:text-white'} block px-3 py-2 rounded-md text-base font-medium`}>
    {children}
  </a>
);

export default mobileNavigationItem;
