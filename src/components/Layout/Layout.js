import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Backdrop from "../UI/Backdrop/Backdrop";

class Layout extends Component {

  state = {
    profileMenuOpen: false,
    mobileMenuOpen: false,
  }

  profileMenuHandler = () => {
    this.setState((prevState) => {
      return {profileMenuOpen: !prevState.profileMenuOpen}
    });
  }

  mobileMenuHandler = () => {
    this.setState((prevState) => {
      return {mobileMenuOpen: !prevState.mobileMenuOpen}
    });
  }

  render() {
    return (
      <div className="pt-16">
        <Backdrop show={this.state.mobileMenuOpen} backdropOff={this.mobileMenuHandler}/>
        <Toolbar profileMenu={this.state.profileMenuOpen}
                 mobileMenu={this.state.mobileMenuOpen}
                 toggleProfileMenu={this.profileMenuHandler}
                 toggleMobileMenu={this.mobileMenuHandler} />
        <div className="mb-5">
          SideDrawer, Backdrop
        </div>
        <main> {this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
