import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { RawPicture as Picture } from './Picture';

describe('Picture', () => {
  it('renders', () => {
    const wrapper = shallow(
      <Picture description="A sample test image" src="//placehold.it/200x200" />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a lazy-load variant', () => {
    const wrapper = shallow(
      <Picture
        description="Test"
        src="//placehold.it/200x200"
        lazyload
        srcset={[
          {
            url: '//placehold.it/400x400',
            width: 400,
          },
          {
            url: '//placehold.it/600x600',
            width: 600,
          },
        ]}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('img[loading]')).toHaveLength(1);
  });
});
