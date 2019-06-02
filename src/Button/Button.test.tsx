import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from './Button';

describe('Button', () => {
  it('renders', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button onClick={mock} title="Test" />);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.prop('type')).toEqual('submit');
    expect(mock).not.toHaveBeenCalled();

    wrapper.simulate('click');

    expect(mock).toHaveBeenCalled();
  });

  it('renders a light variant', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button onClick={mock} title="Test" variant="light" />);

    expect(toJson(wrapper)).toMatchSnapshot();

    expect(wrapper.find('.light')).toHaveLength(1);
    expect(wrapper.find('.default')).toHaveLength(0);
  });

  it('renders a disabled variant', () => {
    const mock = jest.fn();
    const wrapper = shallow(<Button onClick={mock} title="Test" disabled />);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(mock).not.toHaveBeenCalled();

    wrapper.simulate('click');

    expect(mock).not.toHaveBeenCalled();
  });
});
