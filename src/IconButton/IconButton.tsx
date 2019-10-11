import React, { Component } from 'react';
import classnames from 'classnames';

import Button, { ButtonProps } from '../Button/Button';

import styles from './IconButton.scss';

export interface IconButtonProps extends ButtonProps {
  icon: JSX.Element;
}

export default class IconButton extends Component<IconButtonProps> {
  public render() {
    const { variant: defaultVariant } = Button.defaultProps;
    const {
      block,
      disabled,
      icon,
      className: customClassName,
      large,
      title,
      variant = defaultVariant,
      ...props
    } = this.props;

    const className = classnames(
      styles.wrapper,
      { [styles[variant]]: !disabled },
      {
        [styles.large]: large,
        [styles.disabled]: disabled,
        [styles.block]: block,
      },
      customClassName
    );

    return (
      <button
        className={className}
        {...props}
        disabled={!!disabled}
        value={title}
      >
        {icon}
      </button>
    );
  }
}
