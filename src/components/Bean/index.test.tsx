import { GithubIcon } from '@saschazar/unicat-icons';
import React from 'react';
import ReactDOM from 'react-dom';
import Bean from '.';

const div = document.createElement('div');

it('renders without crashing', () => {
  ReactDOM.render(<Bean name="Demo Bean" description="A demo Bean" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render, when valid hex prop format is given', () => {
  ReactDOM.render(
    <Bean name="Test" column={true} reverse={true} hex="#FFF" />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('should fail, when wrong hex prop format is given', () => {
  expect(() => {
    ReactDOM.render(<Bean name="Demo Bean" hex="#zfa" />, div);
  }).toThrowError();
});

it('should render an Icon as image', () => {
  ReactDOM.render(<Bean image={<GithubIcon />} name="A test name" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
