import React from 'react';

const layout = (props) => (
  <>
    <div className="mb-5">
      Toolbar, SideDrawer, Backdrop
    </div>
    <main>
      {props.children}
    </main>
  </>
);

export default layout;
