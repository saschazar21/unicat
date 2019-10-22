import React, { Component, ReactNode, ReactElement } from 'react';
import classnames from 'classnames';
import { CloseIcon } from '@saschazar/unicat-icons';

import { SmallVariant } from '../__types__/global';
import Button from '../Button';

import styles from './Card.scss';
import IconButton from '../IconButton';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  cta?: ReactElement<Button>;
  className?: string;
  dark?: boolean;
  image?: ReactNode;
  modal?: boolean;
  onClose?: (event?: React.SyntheticEvent) => void;
  variant?: SmallVariant;
}

export default class Card extends Component<CardProps> {
  static defaultProps = {
    variant: 'default',
  };

  public renderCta = () => {
    const { cta } = this.props;

    return <div className={styles.cta}>{cta}</div>;
  };

  public renderControls = () => {
    const { onClose } = this.props;

    return (
      <div className={styles.controls}>
        {onClose && (
          <IconButton
            variant="light"
            name="close"
            icon={<CloseIcon />}
            onClick={onClose}
          />
        )}
      </div>
    );
  };

  public render() {
    const { variant: defaultVariant } = Card.defaultProps;
    const {
      children,
      className: customClassName,
      cta,
      dark,
      image,
      modal,
      onClose,
      variant = defaultVariant,
    } = this.props;

    const aria = modal ? { role: 'dialog', 'aria-modal': true } : {};

    const className = classnames(
      styles.wrapper,
      { [styles[variant]]: variant !== defaultVariant },
      { [styles.dark]: dark || image },
      customClassName
    );

    const bodyClassName = classnames(styles.body);

    return (
      <aside className={className} {...aria}>
        {onClose && this.renderControls()}
        {image && <picture className={styles.picture}>{image}</picture>}
        <div className={bodyClassName}>{children}</div>
        {cta && this.renderCta()}
      </aside>
    );
  }
}
