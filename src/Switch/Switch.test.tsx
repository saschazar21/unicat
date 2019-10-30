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

    wrapper.find('input').simulate('click');

    expect(wrapper.find('[checked=true]')).toHaveLength(1);
  });

  it('renders a checked variant', () => {
    const wrapper = shallow(<Switch name="test" checked />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a verbose variant', () => {
    const wrapper = shallow(<Switch name="test" verbose />);

    expect(wrapper.find('.verbose')).toHaveLength(1);
  });

  it('handles click', () => {
    const onClick = jest.fn();

    const wrapper = shallow(<Switch name="test" onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();

    wrapper.find('input').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
