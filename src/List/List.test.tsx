import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

const items = ['Obi-Wan Kenobi', 'Luke Skywalker', 'Yoda'];

describe('List', () => {
  it('renders', () => {
    const wrapper = shallow(<List items={items} />);

    expect(wrapper.find('span')).toHaveLength(items.length);
    expect(wrapper.find('li')).toHaveLength(items.length);
  });

  it('renders a horizontal list', () => {
    const wrapper = shallow(<List items={items} horizontal />);

    expect(wrapper.find('.horizontal')).toHaveLength(1);
  });

  it('renders an ordered list', () => {
    const wrapper = shallow(<List items={items} ordered />);

    expect(wrapper.find('ol')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(0);
  });

  it('renders a list with HTML items', () => {
    let iter = 0;
    const customItems = items.map(i => (
      <strong key={`${i}-${iter++}`}>{i}</strong>
    ));

    const wrapper = shallow(<List items={customItems} />);

    expect(wrapper.find('strong')).toHaveLength(customItems.length);
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
