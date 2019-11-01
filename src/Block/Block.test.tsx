import React from 'react'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Block from './Block';

describe('Block', () => {
  it('renders', () => {
    const wrapper = shallow(<Block>Text</Block>);

    expect(wrapper.find('.default')).toHaveLength(1);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a variant', () => {
    const wrapper = shallow(<Block variant="light">Text</Block>);

    expect(wrapper.find('.light')).toHaveLength(1);
    expect(wrapper.find('.default')).toHaveLength(0);
  });
});