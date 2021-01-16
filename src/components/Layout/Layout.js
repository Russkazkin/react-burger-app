import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <>
    <Toolbar />
    <div className="mb-5">
      SideDrawer, Backdrop
    </div>
    <main>
      {props.children}
    </main>
  </>
);

export default layout;
