import React from 'react';
import { shallow } from 'enzyme';

import Loader from './MediaLoading';

describe('Loader', () => {
  it('renders', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find('.dark')).toHaveLength(0);
  });

  it('renders a dark variant', () => {
    const wrapper = shallow(<Loader dark />);

    expect(wrapper.find('.dark')).toHaveLength(1);
  });
});
