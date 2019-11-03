import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Container from './Container';

describe('Container', () => {
  it('renders', () => {
    const wrapper = shallow(<Container>Test</Container>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
