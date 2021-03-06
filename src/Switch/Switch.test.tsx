import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Switch from './Switch';

describe('Switch', () => {
  it('renders', () => {
    const wrapper = shallow(<Switch name="test" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a large variant', () => {
    const wrapper = shallow(<Switch name="test" large />);

    expect(toJson(wrapper)).toMatchSnapshot();

    expect(wrapper.find('[checked="false"]')).toHaveLength(0);

    wrapper.find('input').simulate('change', { target: { checked: true } });

    expect(wrapper.find('[checked=true]')).toHaveLength(1);
  });

  it('renders a checked variant', () => {
    const wrapper = shallow(<Switch name="test" checked />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a verbose variant', () => {
    const wrapper = shallow(<Switch name="test" prefix="text" />);

    expect(wrapper.find('.verbose')).toHaveLength(1);
    expect(wrapper.find('[data-prefix]')).toHaveLength(1);
    expect(wrapper.find('[data-suffix]')).toHaveLength(0);
  });

  it('handles click', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<Switch name="test" onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();

    wrapper.find('input').simulate('change', { target: { checked: true } });

    expect(onChange).toHaveBeenCalled();
  });

  it('handles key up', () => {
    const onChange = jest.fn();

    const wrapper = shallow(<Switch name="test" onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();

    wrapper.find('input').simulate('keyup', { key: ' ' });

    expect(onChange).toHaveBeenCalled();
  });
});
