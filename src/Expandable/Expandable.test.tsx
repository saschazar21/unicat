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
});
