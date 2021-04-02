import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem';

configure({ adapter: new Adapter() });

describe('<DesktopNavigation />', () => {
  it('should render two <DesktopNavigationItem /> elements if not authenticated', () => {
    const history = {location: {path: '/fake-path'}};
    const wrapper = shallow(<DesktopNavigation.WrappedComponent history={history} />);
    expect(wrapper.find(DesktopNavigationItem)).toHaveLength(2);
  });
  it('should render three <DesktopNavigationItem /> elements if authenticated', () => {
    const history = {location: {path: '/fake-path'}};
    const wrapper = shallow(<DesktopNavigation.WrappedComponent history={history} isAuthenticated={true} />);
    expect(wrapper.find(DesktopNavigationItem)).toHaveLength(3);
  });
});
