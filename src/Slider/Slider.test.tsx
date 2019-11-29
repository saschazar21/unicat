import React from 'react';
import { shallow } from 'enzyme';

import Slider from './Slider';

describe('Slider', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Slider>
        <span>Test</span>
      </Slider>
    );

    expect(wrapper.find('IconButton')).toHaveLength(2);
  });
});
