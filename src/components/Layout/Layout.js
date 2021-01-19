import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'

class Layout extends Component {

  state = {
    profileMenuOpen: false,
    mobileMenuOpen: false,
  }

  profileMenuHandler = () => {
    let {profileMenuOpen} = this.state;
    profileMenuOpen = !profileMenuOpen;
    this.setState({
      profileMenuOpen: profileMenuOpen,
    })
  }

  mobileMenuHandler = () => {
    let {mobileMenuOpen} = this.state;
    mobileMenuOpen = !mobileMenuOpen;
    this.setState({
      mobileMenuOpen: mobileMenuOpen,
    })
  }

  render() {
    return (
      <>
        <Toolbar profileMenu={this.state.profileMenuOpen}
                 mobileMenu={this.state.mobileMenuOpen}
                 toggleProfileMenu={this.profileMenuHandler}
                 toggleMobileMenu={this.mobileMenuHandler} />
        <div className="mb-5">
          SideDrawer, Backdrop
        </div>
        <main> {this.props.children}</main>
      </>
    );
  }
}

export default Layout;
