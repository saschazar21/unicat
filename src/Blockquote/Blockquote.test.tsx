import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Blockquote from './Blockquote';

describe('Blockquote', () => {
  it('renders', () => {
    const wrapper = shallow(<Blockquote>A test quote</Blockquote>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders an author', () => {
    const wrapper = shallow(<Blockquote author="Test">Test quote</Blockquote>);

    expect(wrapper.find('.author')).toHaveLength(1);
  });
});
