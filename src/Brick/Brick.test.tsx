import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StarIcon } from '@saschazar/unicat-icons';

import Brick from './Brick';

describe('Brick', () => {
  it('renders', () => {
    const wrapper = shallow(<Brick>I am a brick</Brick>);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('renders an icon', () => {
    const wrapper = shallow(
      <Brick icon={<StarIcon key="demo-key" />}>I am an icon brick</Brick>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('StarIcon')).toHaveLength(1);
  });

  it('renders a link', () => {
    const wrapper = shallow(<Brick href="#">I am a link brick</Brick>);

    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(0);
  });
});
