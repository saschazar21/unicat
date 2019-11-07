import React, { Component, ReactNode, ReactElement } from 'react';
import classnames from 'classnames';
import { CloseIcon } from '@saschazar/unicat-icons';

import { SmallVariant } from '../__types__/global';
import Button from '../Button';
import Container from '../Container';
import IconButton from '../IconButton';

import styles from './Card.scss';

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

  public renderCta = (): JSX.Element => {
    const { cta } = this.props;

    return <Container className={styles.cta}>{cta}</Container>;
  };

  public renderControls = (): JSX.Element => {
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

  public render(): JSX.Element {
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

    return (
      <aside className={className} {...aria}>
        {onClose && this.renderControls()}
        {image && <picture className={styles.picture}>{image}</picture>}
        <Container className={styles.body}>{children}</Container>
        {cta && this.renderCta()}
      </aside>
    );
  }
}
