import React from "react";
import {withRouter} from "react-router-dom";

import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

const desktopNavigation = (props) => {
  const path = props.history.location.pathname;
  const links = {
    burger: '/burger',
    orders: '/orders',
  };
  return (
  <div className="hidden sm:block sm:ml-6">
    <div className="flex space-x-4">
      <DesktopNavigationItem link={links.burger} active={path === links.burger}>Burger Builder</DesktopNavigationItem>
      <DesktopNavigationItem link={links.orders} active={path === links.orders}>Orders</DesktopNavigationItem>
    </div>
  </div>
  )};

export default withRouter(desktopNavigation);
