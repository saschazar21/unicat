import React from 'react';
import { mount } from 'enzyme';

import Navigation from './Navigation';
import { NavigationItemProps } from './components/NavigationItem/NavigationItem';

import { noop } from '../__tools__/helpers';

const items: NavigationItemProps[] = [
  {
    onFocus: noop,
    text: 'Test 1',
  },
  {
    onFocus: noop,
    text: 'Test 2',
  },
];

describe('Navigation', () => {
  it('renders', () => {
    const wrapper = mount(<Navigation items={items} />);

    expect(wrapper.find('li')).toHaveLength(items.length);
  });
});
