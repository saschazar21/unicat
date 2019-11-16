import React from 'react';
import { mount, shallow } from 'enzyme';

import Breadcrumbs from './Breadcrumbs';
import toJson from 'enzyme-to-json';

const items = [
  {
    name: 'Home',
  },
  {
    href: '#components',
    name: 'Components',
  },
  {
    active: true,
    href: '#button',
    name: 'Button',
  },
];

describe('Breadcrumbs', () => {
  it('renders', () => {
    const wrapper = shallow(<Breadcrumbs items={items} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('mounts a default variant', () => {
    const wrapper = mount(<Breadcrumbs items={items} />);
    expect(wrapper.find('span')).toHaveLength(2);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('mounts a small variant', () => {
    const wrapper = mount(<Breadcrumbs small items={items} />);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('a')).toHaveLength(1);
  });
});
