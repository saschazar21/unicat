import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Expandable from './index';

describe('Expandable', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Expandable title="Test">
        <p>Test Body</p>
      </Expandable>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('has the .open class', () => {
    const wrapper = shallow(
      <Expandable title="Test" open>
        <p>Test Body</p>
      </Expandable>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.open')).toHaveLength(1);
  });

  it('calls handleClick on click', () => {
    const wrapper = shallow(
      <Expandable title="Test">
        <p>Test Body</p>
      </Expandable>
    );
    const button = wrapper.find('.activator');

    expect(button).toHaveLength(1);
    expect(wrapper.find('.open')).toHaveLength(0);

    button.simulate('click');

    expect(wrapper.find('.open')).toHaveLength(1);
  });
});
