import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import DateTime from './DateTime';

describe('DateTime', () => {
  it('renders', () => {
    const wrapper = shallow(<DateTime date="2019-10-27" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a raw version', () => {
    const wrapper = shallow(<DateTime date={new Date()} raw />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
