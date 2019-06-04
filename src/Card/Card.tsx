import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import { SmallVariant } from '../__types__/global';
import styles from './Card.scss';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  variant?: SmallVariant;
}

export default class Card extends Component<CardProps> {
  static defaultProps = {
    variant: 'default',
  };

  public render() {
    const { variant: defaultVariant } = Card.defaultProps;
    const {
      children,
      className: customClassName,
      variant = defaultVariant,
    } = this.props;

    const className = classnames(
      styles.wrapper,
      { [styles[variant]]: variant !== defaultVariant },
      customClassName
    );

    return <aside className={className}>{children}</aside>;
  }
}
