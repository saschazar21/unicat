import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Blockquote.scss';

export interface BlockquoteProps {
  author?: string;
  children: ReactNode;
  className?: string;
  cite?: string;
}

export default class Blockquote extends Component<BlockquoteProps> {
  public render() {
    const {
      author,
      children,
      className: customClassName,
      ...props
    } = this.props;

    const className = classnames(styles.wrapper, customClassName);

    return (
      <blockquote className={className} {...props}>
        <span className={styles.quote}>{children}</span>
        {author && <span className={styles.author}>― {author}</span>}
      </blockquote>
    );
  }
}
