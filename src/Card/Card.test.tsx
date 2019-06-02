import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Card from './Card';

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallow(<Card><span>Test</span></Card>);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('renders a light variant', () => {
    const wrapper = shallow(<Card variant="light">Test</Card>);

    expect(toJson(wrapper)).toMatchSnapshot();

    expect(wrapper.find('.light')).toHaveLength(1);
  });
});