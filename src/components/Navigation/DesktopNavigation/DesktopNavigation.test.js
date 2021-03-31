import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationItem from './DesktopNavigationItem/DesktopNavigationItem'

configure({ adapter: new Adapter() });

describe('<DesktopNavigation />', () => {
  it('should render two <DesktopNavigationItem /> elements if not authenticated', () => {
    const wrapper = shallow(<DesktopNavigation />);
    expect(wrapper.find(DesktopNavigationItem)).toHaveLength(2);
  });
});
