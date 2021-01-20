import React from "react";

const burgerButton = ({showNav, isOpened}) => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

    <button onClick={showNav} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
      <span className="sr-only">Open main menu</span>

      <svg className={!isOpened ? 'h-6 w-6 block' : 'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg className={isOpened ? 'h-6 w-6 block' : 'hidden'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>
);

export default burgerButton;
