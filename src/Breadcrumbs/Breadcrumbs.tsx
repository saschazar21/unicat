import React, { ReactNode, createElement } from 'react';
import classnames from 'classnames';
import { ChevronIcon } from '@saschazar/unicat-icons';

import List from '../List';
import KeyGenerator from '../__tools__/key-generator';

import styles from './Breadcrumbs.scss';

export interface BreadcrumbsItems {
  active?: boolean;
  href?: string;
  name: string;
}

export interface BreadcrumbsProps {
  /** a custom className */
  className?: string;
  /** the breadcrumbs segments */
  items: BreadcrumbsItems[];
  /** a custom prefix */
  prefix?: ReactNode;
  /** display only first and last */
  small?: boolean;
}

export default (props: BreadcrumbsProps): JSX.Element => {
  const {
    className: customClassName,
    prefix: customPrefix,
    items,
    small,
  } = props;

  const prefix = customPrefix || <ChevronIcon />;
  const keygen = new KeyGenerator('Breadcrumbs');
  const className = classnames(
    { [styles.small]: small },
    styles.wrapper,
    customClassName
  );

  const renderItems = (): JSX.Element[] => {
    const breadcrumbs: BreadcrumbsItems[] =
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      small && items.length > 2 ? [items.shift()!, items.pop()!] : items;

    return breadcrumbs.map(({ active, href, name }) =>
      createElement(
        active && href ? 'a' : 'span',
        Object.assign({}, { key: keygen.next() }, active ? { href } : null),
        name
      )
    );
  };

  return (
    <nav>
      <List
        horizontal
        inline
        className={className}
        prefix={prefix}
        items={renderItems()}
      />
    </nav>
  );
};
