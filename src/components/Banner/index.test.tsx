import React from 'react';
import ReactDOM from 'react-dom';
import Banner from '.';

const div = document.createElement('div');

it('renders a Banner', () => {
  ReactDOM.render(<Banner>A demo Banner</Banner>, div);
  ReactDOM.unmountComponentAtNode(div);
});
