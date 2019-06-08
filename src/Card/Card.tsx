import React, { Component, ReactNode, ReactElement } from 'react';
import classnames from 'classnames';

import { SmallVariant } from '../__types__/global';
import Button from '../Button';

import styles from './Card.scss';

export interface CardProps {
  children: ReactNode[] | ReactNode;
  cta?: ReactElement<Button>;
  className?: string;
  variant?: SmallVariant;
}

export default class Card extends Component<CardProps> {
  static defaultProps = {
    variant: 'default',
  };

  public renderCta = () => {
    const { cta } = this.props;

    return <div className={styles.cta}>{cta}</div>;
  }

  public render() {
    const { variant: defaultVariant } = Card.defaultProps;
    const {
      children,
      className: customClassName,
      cta,
      variant = defaultVariant,
    } = this.props;

    const className = classnames(
      styles.wrapper,
      { [styles[variant]]: variant !== defaultVariant },
      customClassName,
    );

    const bodyClassName = classnames(
      styles.body,
    );

    return (
      <aside className={className}>
        <div className={bodyClassName}>{children}</div>
        {cta && this.renderCta()}
      </aside>
    );
  }
}
