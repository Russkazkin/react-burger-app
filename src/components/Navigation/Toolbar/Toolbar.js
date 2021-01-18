import React from "react";


import DesktopNavigation from "../DesktopNavigation/DesktopNavigation"
import burgerLogo from "../../../assets/images/burger-logo.png";

const toolbar = ({profileMenu, toggleProfileMenu}) => (
  <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

          <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span className="sr-only">Open main menu</span>

            <svg className="h-6 w-6 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg className="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-8 w-auto" src={burgerLogo} alt="Workflow"/>
            <img className="hidden lg:block h-8 w-auto" src={burgerLogo} alt="Workflow"/>
          </div>
          <DesktopNavigation />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <div className="ml-3 relative">
            <div>
              <button onClick={toggleProfileMenu} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
              </button>
            </div>
            <div className={`${profileMenu ? 'transition ease-out duration-100 transform opacity-100 scale-100 block' : 'transition ease-in duration-75 transform opacity-0 scale-95 hidden'} origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Your Profile</button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Settings</button>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden sm:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <button className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</button>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</button>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</button>
        <button className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</button>
      </div>
    </div>
  </nav>

);

export default toolbar;
