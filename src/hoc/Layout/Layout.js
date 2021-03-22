import React, {Component} from 'react';
import { connect } from "react-redux";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Backdrop from "../../components/UI/Backdrop/Backdrop";

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
    const {isAuthenticated} = this.props;
    return (
      <div className="pt-20">
        <Backdrop show={this.state.mobileMenuOpen} backdropOff={this.mobileMenuHandler}/>
        <Toolbar profileMenu={this.state.profileMenuOpen}
                 mobileMenu={this.state.mobileMenuOpen}
                 toggleProfileMenu={this.profileMenuHandler}
                 toggleMobileMenu={this.mobileMenuHandler}
                 isAuth={isAuthenticated} />
        <main> {this.props.children}</main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
  }
}

export default connect(mapStateToProps)(Layout);
