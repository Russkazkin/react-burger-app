import React from "react";
import {withRouter} from "react-router-dom";

import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

const desktopNavigation = (props) => {
  const path = props.history.location.pathname;
  const links = {
    burger: '/burger',
    orders: '/orders',
    auth: '/auth'
  };
  return (
  <div className="hidden sm:block sm:ml-6">
    <div className="flex space-x-4">
      <DesktopNavigationItem link={links.burger} active={path === links.burger}>Burger Builder</DesktopNavigationItem>
      <DesktopNavigationItem link={links.orders} active={path === links.orders}>Orders</DesktopNavigationItem>
      <DesktopNavigationItem link={links.auth} active={path === links.auth}>Sign-in</DesktopNavigationItem>
    </div>
  </div>
  )};

export default withRouter(desktopNavigation);
