import React from "react";

import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

const desktopNavigation = (props) => (
  <div className="hidden sm:block sm:ml-6">
    <div className="flex space-x-4">
      <DesktopNavigationItem isActive={true}>Dashboard</DesktopNavigationItem>
      <DesktopNavigationItem isActive={false}>Team</DesktopNavigationItem>
      <DesktopNavigationItem isActive={false}>Projects</DesktopNavigationItem>
      <DesktopNavigationItem isActive={false}>Calendar</DesktopNavigationItem>
    </div>
  </div>
);

export default desktopNavigation;
