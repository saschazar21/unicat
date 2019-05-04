import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import { Spacing } from '../__data__/definitions';
import { lineHeights } from '../__styles__/fonts';
import { spacings } from '../__styles__/sizes';
import KeyGenerator from '../__tools__/key-generator';

export interface ListProps {
  className?: string;
  distribute?: 'even' | 'normal';
  horizontal?: boolean;
  items: (ReactNode | string)[];
  ordered?: boolean;
  prefix?: ReactNode;
}

class List extends Component<ListProps> {
  static defaultProps = {
    distribute: 'normal',
  };

  private _key: KeyGenerator = new KeyGenerator('List');

  public render() {
    const { className, items, ordered, prefix } = this.props;
    const key = this._key;
    const children: ReactNode[] = items.map(i => {
      const item = typeof i === 'string' ? <span>{i}</span> : i;
      return (
        <li key={key.next()}>
          {prefix} {item}
        </li>
      );
    });

    return React.createElement(ordered ? 'ol' : 'ul', { className }, children);
  }
}

export default styled(List)<ListProps>`
  ${({ horizontal }) =>
    horizontal
      ? 'display: flex; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap;'
      : 'display: block'};
  padding: 0;
  list-style-type: ${({ prefix }) => (prefix ? 'none' : 'inherit')};
  line-height: ${lineHeights[Spacing.XL]}

  > li {
    ${({ prefix }) =>
      prefix ? 'display: flex; align-items: center;' : 'display: block;'}
    ${({ horizontal }) =>
      horizontal && `margin-right: ${spacings[Spacing.XS]};`}
    ${({ distribute, horizontal }) =>
      horizontal && distribute === 'even' && 'flex: 1;'}
  }
`;
