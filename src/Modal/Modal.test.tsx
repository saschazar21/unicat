import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Modal from './Modal';


describe('Modal', () => {
  it('renders', () => {
    const f = jest.fn();
    const wrapper = shallow(
      <Modal onClose={f}>
        <span>Test</span>
      </Modal>
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    expect(f).not.toHaveBeenCalled();

    const backdrop = wrapper.find('.backdrop');
    expect(backdrop).toHaveLength(1);

    backdrop.simulate('click');
    expect(f).toHaveBeenCalled();
  });

  it('closes using "esc" key', () => {
    const f = jest.fn();
    const wrapper = shallow(
      <Modal onClose={f}>
        <span>Test</span>
      </Modal>
    );

    expect(f).not.toHaveBeenCalled();
    wrapper.simulate('keyup', { key: 'Escape' });

    expect(f).toHaveBeenCalled();
  });
});