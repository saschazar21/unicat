import React, { Component } from 'react';
import classnames from 'classnames';

import { SmallVariant } from '../__types__/global';

import styles from './Button.scss';

export interface ButtonProps {
  block?: boolean;
  className?: string;
  disabled?: boolean;
  icon?: SVGSVGElement;
  large?: boolean;
  onClick?: any;
  title: string;
  type?: 'submit' | 'reset';
  variant?: SmallVariant;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: 'default',
    type: 'submit',
  };

  public render() {
    const { variant: defaultVariant } = Button.defaultProps;
    const {
      className: customClassName,
      disabled,
      icon,
      large,
      onClick,
      title,
      type,
      variant = defaultVariant,
    } = this.props;

    const className = classnames(
      styles.wrapper,
      { [styles[variant]]: !disabled },
      { [styles.large]: large, [styles.disabled]: disabled },
      customClassName
    );

    return (
      <button className={className} onClick={onClick} type={type}>
        {title}
        {icon && <span>{icon}</span>}
      </button>
    );
  }
}
