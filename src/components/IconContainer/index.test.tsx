import { GithubIcon } from '@saschazar/unicat-icons';
import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import IconContainer from './index';

const div = document.createElement('div');

it('should render an IconContainer', () => {
  ReactDOM.render(<IconContainer><GithubIcon/></IconContainer>, div);
  ReactDOM.unmountComponentAtNode(div);
});
