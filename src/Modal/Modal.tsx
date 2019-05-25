import React, { Component, ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Modal.scss';

export interface ModalProps {
  children: ReactNode[] | ReactNode;
  className?: string;
  heading?: ReactNode;
  onClose: (event: MouseEvent) => void;
  variant?: 'default' | 'light';
}

export default class Modal extends Component<ModalProps> {
  static defaultProps = {
    variant: 'default',
  };

  public render() {
    const { variant: defaultVariant } = Modal.defaultProps;

    const { children, className: customClassName, onClose, variant } = this.props;

    const className = classnames(
      styles.wrapper,
      { [styles.variant]: variant !== defaultVariant },
      customClassName,
    );

    // Insert template logic here
    return <div className={className} onClick={onClose as any}>{children}</div>;
  }
}
