import React from "react";

import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

const desktopNavigation = (props) => (
  <div className="hidden sm:block sm:ml-6">
    <div className="flex space-x-4">
      <DesktopNavigationItem link='/' active>Burger Builder</DesktopNavigationItem>
      <DesktopNavigationItem link='/'>Checkout</DesktopNavigationItem>
    </div>
  </div>
);

export default desktopNavigation;
