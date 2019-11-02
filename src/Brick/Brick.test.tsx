import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { StarIcon } from '@saschazar/unicat-icons';

import Brick from './Brick';

describe('Brick', () => {
  it('renders', () => {
    const wrapper = shallow(<Brick>I am a brick</Brick>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders an icon', () => {
    const wrapper = shallow(
      <Brick icon={<StarIcon key="demo-key" />}>I am an icon brick</Brick>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
