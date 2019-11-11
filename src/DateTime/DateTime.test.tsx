import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { RawDateTime } from './DateTime';

describe('DateTime', () => {
  it('renders', () => {
    const wrapper = shallow(<RawDateTime date="2019-10-27" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a raw version', () => {
    const wrapper = shallow(<RawDateTime date={new Date()} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
