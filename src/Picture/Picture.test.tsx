import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Picture from './Picture';

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
            width: '400w',
          },
          {
            url: '//placehold.it/600x600',
            width: '600w',
          },
        ]}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('img[dataSrcSet]')).toHaveLength(1);
  });

  it('renders a sizes attribute', () => {
    const wrapper = shallow(
      <Picture
        description="Test"
        src="//placehold.it/200x200"
        sizes={[
          {
            mediaQuery: '(min-width 640px)',
            width: '80vw',
          },
        ]}
        srcset={[
          {
            url: '//placehold.it/500x500',
            width: '500w',
          },
        ]}
      />
    );

    expect(wrapper.find('img[sizes]')).toHaveLength(1);
  });
});
