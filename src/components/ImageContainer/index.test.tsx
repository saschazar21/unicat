import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './index';

const div = document.createElement('div');

it('renders ImageContainer without crashing', () => {
  ReactDOM.render(<ImageContainer caption="A test image" image="http://placehold.it/640" />, div);
  ReactDOM.unmountComponentAtNode(div);
});