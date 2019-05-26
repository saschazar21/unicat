import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Card.scss';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  level?: Size;
  spacing?: Size;
}

export default class Card extends Component<CardProps> {
  static defaultProps = {
    level: 'xs',
    spacing: 'l',
  };

  public render() {
    const { level: defaultLevel, spacing: defaultSpacing } = Card.defaultProps;
    const {
      children,
      className: customClassName,
      level = defaultLevel,
      spacing = defaultSpacing,
    } = this.props;

    const className = classnames(
      styles.wrapper,
      styles[`level-${level}`],
      styles[`spacing-${spacing}`],
      customClassName
    );

    return <aside className={className}>{children}</aside>;
  }
}
