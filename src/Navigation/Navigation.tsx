import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import NavigationItem from './components/NavigationItem';
import { NavigationItemProps } from './components/NavigationItem/NavigationItem';

import { useKeyGenerator } from '../__tools__/key-generator';

import styles from './Navigation.scss';

export interface NavigationProps {
  /** set active element */
  active?: number;
  /** custom class name */
  className?: string;
  /** the navigation items */
  items: NavigationItemProps | NavigationItemProps[];
  /** set responsive */
  responsive?: boolean;
  /** render vertical */
  vertical?: boolean;
}

export default function Navigation(props: NavigationProps): JSX.Element {
  const {
    active,
    className: customClassName,
    items: rawItems,
    responsive,
    vertical,
  } = props;
  const items = Array.isArray(rawItems) ? rawItems : [rawItems];

  const [transform, setTransform] = useState('translate3d(0, 0, 0)');
  const [childRect, setChildRect] = useState<DOMRect>();
  const [index, setIndex] = useState(active || 0);
  const keys = useKeyGenerator('Navigation', items.length);
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const { current } = ref as React.RefObject<HTMLElement>;
    if (childRect && current && current.getBoundingClientRect) {
      const {
        x: rootX,
        width: rootWidth,
      } = current.getBoundingClientRect() as DOMRect;
      const { x: childX, width: childWidth } = childRect as DOMRect;

      const childCenter = childX + childWidth * 0.5;
      const rootCenter = rootX + rootWidth * 0.5;

      setTransform(`translate3d(${rootCenter - childCenter}px, 0, 0)`);
    }
  }, [childRect, window.innerWidth]);

  const className = classnames(styles.wrapper, customClassName, {
    [styles.responsive]: responsive,
    [styles.vertical]: vertical,
  });

  const onFocus = (rect: DOMRect, i?: number): void => {
    setChildRect(rect);
    i !== undefined && setIndex(i);
  };

  return (
    <nav className={className} ref={ref as React.RefObject<HTMLElement>}>
      <ul className={styles.viewport} style={{ transform }}>
        {items.map((item, i) => (
          <NavigationItem
            active={i === index}
            index={i}
            key={keys[i]}
            onFocus={onFocus}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
}
