import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

configure({ adapter: new Adapter() });

describe('<DesktopNavigation />', () => {
  let history, wrapper;
  beforeEach(() => {
    history = {location: {path: '/fake-path'}};
    wrapper = shallow(<DesktopNavigation.WrappedComponent history={history} />);
  });

  it('should render two <DesktopNavigationItem /> elements if not authenticated', () => {
    expect(wrapper.find(DesktopNavigationItem)).toHaveLength(2);
  });
  it('should render three <DesktopNavigationItem /> elements if authenticated', () => {
    wrapper.setProps({isAuthenticated: true});
    expect(wrapper.find(DesktopNavigationItem)).toHaveLength(3);
  });
});
