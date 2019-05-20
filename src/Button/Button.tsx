import React, { Component } from 'react';
import classnames from 'classnames';

import { Spacing, Variant } from '../__data__/definitions';
import styles from './Button.scss';

export interface ButtonProps {
  block?: boolean;
  className?: string;
  icon?: SVGSVGElement;
  onClick?: any;
  title: string;
  size?: Spacing;
  type?: 'submit' | 'reset';
  variant?: Variant;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: Variant.Primary,
    size: Spacing.M,
    type: 'submit',
  };

  public render() {
    const {
      className: customClassName,
      icon,
      onClick,
      title,
      type,
    } = this.props;
    const className = classnames(styles.wrapper, customClassName);

    return (
      <button className={className} onClick={onClick} type={type}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    );
  }
}
