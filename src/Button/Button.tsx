import React, { Component } from 'react';
import classnames from 'classnames';

import { SmallVariant } from '../__types__/global';

import styles from './Button.scss';

export interface ButtonProps {
  block?: boolean;
  children?: string;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  large?: boolean;
  onClick?: (event?: React.SyntheticEvent) => void;
  name: string;
  type?: 'submit' | 'reset';
  variant?: SmallVariant;
}

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    block: false,
    variant: 'default',
    type: 'submit',
  };

  public render(): JSX.Element {
    const { variant: defaultVariant } = Button.defaultProps;
    const {
      children,
      className: customClassName,
      disabled,
      icon,
      large,
      onClick,
      name,
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
      <button
        className={className}
        onClick={!disabled ? onClick : undefined}
        type={type}
        disabled={disabled}
        name={name}
      >
        {children}
        {icon}
      </button>
    );
  }
}
