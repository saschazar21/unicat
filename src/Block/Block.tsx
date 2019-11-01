import React, { ReactNode } from 'react';
import classnames from 'classnames';

import { Variant } from '../__types__/global';

import styles from './Block.scss';

export interface BlockProps {
  /* the Block's content */
  children: ReactNode | ReactNode[];
  /* custom className */
  className?: string;
  /* the Block's variant */
  variant?: Variant;
}

export default (props: BlockProps) => {
  const {
    children,
    className: customClassName,
    variant: customVariant,
  } = props;

  const variant = customVariant || 'default';
  const className = classnames(
    styles.wrapper,
    styles[variant],
    customClassName
  );

  return <section className={className}>{children}</section>;
};
