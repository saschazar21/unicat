import React, { ReactNode } from 'react';
import classnames from 'classnames';

import styles from './Container.scss';

export interface ContainerProps {
  /* the children to wrap in the container */
  children: ReactNode | ReactNode[];
  /* custom className */
  className?: string;
}

export default function Container(props: ContainerProps): JSX.Element {
  const { children, className: customClassName } = props;

  const className = classnames(styles.wrapper, customClassName);

  return <div className={className}>{children}</div>;
}

Container.displayName = 'Container';
