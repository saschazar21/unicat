import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Button.scss';

export interface ButtonProps {
  block?: boolean;
  className?: string;
  icon?: SVGSVGElement;
  onClick?: any;
  title: string;
  size?: Size;
  type?: 'submit' | 'reset';
  variant?: Variant;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: 'primary',
    size: 'm',
    type: 'submit',
  };

  public render() {
    const { size: defaultSize, variant: defaultVariant } = Button.defaultProps;
    const {
      className: customClassName,
      icon,
      onClick,
      size = defaultSize,
      title,
      type,
      variant = defaultVariant,
    } = this.props;
    const className = classnames(styles.wrapper, styles[size], styles[variant], customClassName);

    return (
      <button className={className} onClick={onClick} type={type}>
        {icon && <span>{icon}</span>}
        {title}
      </button>
    );
  }
}
