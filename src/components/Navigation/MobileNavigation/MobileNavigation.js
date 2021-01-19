import React from "react";

const mobileNavigation = ({mobileOpen}) => (
  <div className={`${ mobileOpen ? 'block' : 'hidden'} sm:hidden`}>
    <div className="px-2 pt-2 pb-3 space-y-1">
      <button className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</button>
    </div>
  </div>
);

export default mobileNavigation;
