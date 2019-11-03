import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import { Heading as HeadingType } from '../__types__/global';

import styles from './Heading.scss';

export interface HeadingProps {
  children: ReactNode[] | string;
  className?: string;
  level: HeadingType;
  SEO?: boolean;
}

export default class Heading extends Component<HeadingProps> {
  static defaultProps = {
    className: null,
    SEO: false,
  };

  public render(): JSX.Element {
    const { children, className: customClassName, level, SEO } = this.props;
    const className = classnames(
      styles.wrapper,
      styles[level],
      customClassName
    );

    return React.createElement(SEO ? level : 'span', { className }, children);
  }
}
