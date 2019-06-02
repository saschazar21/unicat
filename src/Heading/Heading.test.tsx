import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Heading from './Heading';

describe('Heading', () => {
  it('renders', () => {
    const wrapper = shallow(<Heading level="h1">Test</Heading>);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(0);
    expect(wrapper.find('.h1')).toHaveLength(1);
  });

  it('renders a <h2 /> tag', () => {
    const wrapper = shallow(<Heading level="h2" SEO>Test</Heading>);

    expect(toJson(wrapper)).toMatchSnapshot();
    
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(0);
  });
})