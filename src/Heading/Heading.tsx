import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Heading.scss';

export interface HeadingProps {
  children: ReactNode[] | string;
  className?: string;
  level: Heading;
  SEO?: boolean;
}

export default class Element extends Component<HeadingProps> {
  static defaultProps = {
    className: null,
    SEO: false,
  };

  public render() {
    const { children, className: customClassName, level, SEO } = this.props;
    const className = classnames(
      styles.wrapper,
      styles[level],
      customClassName
    );

    return React.createElement(SEO ? level : 'span', { className }, children);
  }
}
