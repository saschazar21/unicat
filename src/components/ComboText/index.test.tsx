import { GithubIcon } from '@saschazar/unicat-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import ComboText from '.';

const div = document.createElement('div');

it('should render the Element', () => {
  ReactDOM.render(
    <ComboText icon={<GithubIcon />}>A sample text</ComboText>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
