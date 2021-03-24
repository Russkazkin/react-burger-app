import React from "react";
import {withRouter} from "react-router-dom";

import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

const desktopNavigation = ({isAuthenticated, history}) => {
  const path = history.location.pathname;
  const links = {
    burger: '/burger',
    orders: '/orders',
    auth: '/auth',
    logout: '/logout'
  };
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        <DesktopNavigationItem link={links.burger} active={path === links.burger}>Burger Builder</DesktopNavigationItem>
        {isAuthenticated ?
          <DesktopNavigationItem link={links.orders} active={path === links.orders}>Orders</DesktopNavigationItem> :
          null}
        {!isAuthenticated ?
          <DesktopNavigationItem link={links.auth} active={path === links.auth}>Sign-in</DesktopNavigationItem> :
          <DesktopNavigationItem link={links.logout} active={path === links.logout}>Logout</DesktopNavigationItem>}
      </div>
    </div>
  )
};

export default withRouter(desktopNavigation);
