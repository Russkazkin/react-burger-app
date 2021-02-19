import React from "react";
import { Link } from 'react-router-dom';

const desktopNavigationItem = ({active, children, link}) => (
  <Link to={link} className={`${active ? 'bg-brown-darkest text-white' : 'text-gray-100 hover:bg-brown-dark hover:text-white'} px-3 py-2 rounded-md text-sm font-medium">Dashboard`}>
    {children}
  </Link>
);

export default desktopNavigationItem;
