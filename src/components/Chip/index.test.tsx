import React from 'react';
import ReactDOM from 'react-dom';
import Chip from './index';

const div = document.createElement('div');

it('should render a Chip', () => {
  ReactDOM.render(<Chip>A demo chip</Chip>, div);
  ReactDOM.unmountComponentAtNode(div);
});
