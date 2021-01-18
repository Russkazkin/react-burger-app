import React from "react";

const desktopNavigation = (props) => (
  <div className="hidden sm:block sm:ml-6">
    <div className="flex space-x-4">
      <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</button>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</button>
    </div>
  </div>
);

export default desktopNavigation;
