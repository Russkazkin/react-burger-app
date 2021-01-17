import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {

  state = {
    profileMenuOpen: false,
  }

  profileMenuHandler = () => {
    let {profileMenuOpen} = this.state;
    profileMenuOpen = !profileMenuOpen;
    this.setState({
      profileMenuOpen: profileMenuOpen,
    })
  }

  render() {
    return (
      <>
        <Toolbar profileMenu={this.state.profileMenuOpen} toggleProfileMenu={this.profileMenuHandler}/>
        <div className="mb-5">
          SideDrawer, Backdrop
        </div>
        <main> {this.props.children}</main>
      </>
    );
  }
}

export default Layout;
