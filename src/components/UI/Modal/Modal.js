import React from "react";
import Backdrop from "../Backdrop/Backdrop"

const modal = ({show, children, closeModal}) => (
  <>
    <Backdrop backdropOff={closeModal} show={show} />
    <div style={{transform: show ? 'translateX(50%)' : 'translateX(-100vw)', opacity: show ? '1' : '0'}}
      className="fixed
                 z-50
                 bg-white
                 w-3/4
                 border
                 border-gray-300
                 rounded-sm
                 shadow-md
                 p-4
                 bottom-1/2
                 box-border
                 transition
                 duration-300
                 ease-in-out
                 sm:w-128
                 right-1/2
                 transform
                 translate-y-1/2">
      {children}
    </div>
  </>
);

export default modal;
