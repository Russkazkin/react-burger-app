import React from "react";
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {BurgerBuilder} from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls"

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={f => f} />);
  });
  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({
      ingredients: {salad: 0},
      totalPrice: 5
    });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
