import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import KeyGenerator from '../__tools__/key-generator';

import styles from './List.scss';

export interface ListProps {
  className?: string;
  distribute?: 'even' | 'normal';
  horizontal?: boolean;
  items: ReactNode[];
  ordered?: boolean;
  prefix?: ReactNode | JSX.Element;
}

export default class List extends Component<ListProps> {
  static defaultProps = {
    distribute: 'normal',
  };

  private _key: KeyGenerator = new KeyGenerator('List');

  public render() {
    const { distribute: defaultDistribute } = List.defaultProps;

    const {
      className: customClassName,
      distribute = defaultDistribute,
      horizontal,
      items,
      ordered,
      prefix,
    } = this.props;

    const className = classnames(
      styles.wrapper,
      {
        [styles.horizontal]: horizontal,
        [styles.prefix]: prefix,
        [styles.distribute]: distribute !== defaultDistribute,
      },
      customClassName
    );

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
