import React from 'react';
import classnames from 'classnames';

import { Variant } from '../__types__/global';

import styles from './Brick.scss';

export interface BrickProps {
  /* only a string allowed as child */
  children: string;
  /* custom className */
  className?: string;
  /* icon as prefix */
  icon?: JSX.Element;
  /* hyperlink target */
  href?: string;
  /* custom variant - light by default */
  variant?: Variant;
}

export default (props: BrickProps) => {
  const {
    children,
    className: customClassName,
    icon,
    href,
    variant = 'light',
  } = props;

  const className = classnames(
    { [styles[variant]]: variant },
    styles.wrapper,
    customClassName
  );

  return React.createElement(href ? 'a' : 'span', { className, href }, [
    icon,
    children,
  ]);
};
