import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './index';

const div = document.createElement('div');

it('renders ImageContainer without crashing', () => {
  ReactDOM.render(<ImageContainer caption="A test image" image="http://placehold.it/640" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a complex ImageContainer', () => {
  ReactDOM.render((
  <ImageContainer
    caption="A test image"
    image="http://placehold.it/640"
    srcset={[{ src: 'http://placehold.it/640' }, { src: 'http://placehold.it/640' }]}
    height="640px"
  />), div);
  ReactDOM.unmountComponentAtNode(div);
});
