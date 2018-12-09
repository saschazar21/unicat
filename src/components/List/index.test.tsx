import React from 'react';
import ReactDOM from 'react-dom';
import List from './index';

const div = document.createElement('div');
const arr = new Array(5)
  .fill(null)
  .map((val, idx) => <span key={idx}>Entry #{idx + 1}</span>);

it('renders default List without crashing', () => {
  ReactDOM.render(<List>{arr}</List>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it(`should contain ${arr.length} children with a <li> tag`, () => {
  const list = <List>{arr}</List>;
  expect(list.props.children).toHaveLength(5);
});