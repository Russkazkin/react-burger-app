import React from "react";

import MobileNavigationItem from "./MobileNavigationItem/MobileNavigationItem";

const mobileNavigation = ({mobileOpen}) => (
  <div className={`${ mobileOpen ? 'block' : 'hidden'} sm:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      <MobileNavigationItem active link={'/'}>Burger Builder</MobileNavigationItem>
      <MobileNavigationItem link={'/'}>Checkout</MobileNavigationItem>
    </div>
  </div>
);

export default mobileNavigation;
