import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red Component', () => {
  it('renders a Red', () => {
    const wrapper = shallow(<Red />);

    expect(wrapper).toMatchSnapshot();
  });
});
