import React, { Component } from 'react';
import classnames from 'classnames';

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
  variant?: Variant;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: 'primary',
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
      styles[variant],
      { [styles.large]: large, [styles.disabled]: disabled },
      customClassName
    );

    return (
      <button className={className} onClick={onClick} type={type}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    );
  }
}
