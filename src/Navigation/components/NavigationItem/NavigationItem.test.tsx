import React from 'react';
import { shallow } from 'enzyme';

import NavigationItem from './NavigationItem';

describe('NavigationItem', () => {
  it('renders', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(<NavigationItem text="Test" onFocus={onFocus} />);

    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('renders a link item', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(
      <NavigationItem text="Test" href="#" onFocus={onFocus} />
    );

    expect(wrapper.find('span')).toHaveLength(0);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('renders a disabled link item', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(
      <NavigationItem disabled text="Test" href="#" onFocus={onFocus} />
    );

    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('.disabled')).toHaveLength(1);
  });
});
