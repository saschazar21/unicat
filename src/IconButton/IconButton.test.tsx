import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconButton from './IconButton';

describe('IconButton', () => {
  const icon = (
    <svg viewBox="0 0 64 64">
      <path d="M58.245 12.152C54.943 5.81 49.81 3.455 44.231 4.91c-5.098 1.33-9.79 5.742-11.762 11.094L32 17.277l-.47-1.274c-1.97-5.352-6.662-9.765-11.76-11.093-5.578-1.454-10.712.9-14.014 7.243C1.012 21.262 9.709 37.021 32 59.294 54.291 37.02 62.988 21.263 58.245 12.152z" />
    </svg>
  );

  it('renders', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <IconButton name="Test" icon={icon} onClick={onClick} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();

    wrapper.find('button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
