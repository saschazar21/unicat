import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

describe('List', () => {
  it('renders', () => {
    const items = ['Obi-Wan Kenobi', 'Luke Skywalker', 'Yoda'];
    const wrapper = shallow(<List items={items} />);

    expect(wrapper.find('span')).toHaveLength(items.length);
    expect(wrapper.find('li')).toHaveLength(items.length);
  });
});