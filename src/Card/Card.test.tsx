import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Button from '../Button';
import Card from './Card';

describe('Card', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Card>
        <span>Test</span>
      </Card>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('span')).toHaveLength(1);
  });

  it('renders a light variant', () => {
    const wrapper = shallow(<Card variant="light">Test</Card>);

    expect(toJson(wrapper)).toMatchSnapshot();

    expect(wrapper.find('.light')).toHaveLength(1);
  });

  it('renders a CTA area', () => {
    const noop = jest.fn();
    const cta = (
      <Fragment>
        <Button onClick={noop} title="Test 1" />
        <Button variant="light" onClick={noop} title="Test2" />
      </Fragment>
    );

    const wrapper = shallow(
      <Card cta={cta}>
        <span>Test</span>
      </Card>
    );

    expect(wrapper.find('.cta')).toHaveLength(1);
  });

  it('renders a close button', () => {
    const noop = jest.fn();
    const wrapper = shallow(
      <Card onClose={noop}>
        <span>Test</span>
      </Card>
    );
    expect(toJson(wrapper)).toMatchSnapshot();

    const button = wrapper.find('.meta > IconButton').simulate('click');
    expect(button).toHaveLength(1);
    expect(noop).toHaveBeenCalled();
  });

  it('renders an image', () => {
    const wrapper = shallow(
      <Card image={<img src="//placehold.it/200x200" />}>
        <span>Test</span>
      </Card>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.dark')).toHaveLength(1);
  });
});
