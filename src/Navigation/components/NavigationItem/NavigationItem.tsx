import React, {
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';

import { noop } from '../../../__tools__/helpers';

import styles from './NavigationItem.scss';

export interface NavigationItemProps {
  /** custom class name */
  className?: string;
  /** set as disabled */
  disabled?: boolean;
  /** a link target */
  href?: string;
  /** onFocus event handler */
  onFocus?: (event: SyntheticEvent, rect: DOMRect) => void;
  /** a custom prefix */
  prefix?: ReactNode;
  /** a custom suffix */
  suffix?: ReactNode;
  /** the textual value */
  text: string;
}

export default function NavigationItem(
  props: NavigationItemProps
): JSX.Element {
  const {
    className: customClassName,
    disabled,
    href,
    onFocus: rawOnFocus,
    prefix,
    suffix,
    text,
  } = props;

  const onFocus = rawOnFocus || noop;

  const [rect, setRect] = useState<DOMRect>();
  const ref = useRef<HTMLAnchorElement | HTMLSpanElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current && current.getBoundingClientRect) {
      setRect(current.getBoundingClientRect() as DOMRect);
    }
  }, []);

  const className = classnames(styles.wrapper, customClassName, {
    [styles.disabled]: disabled,
  });

  const handleFocus = (event: SyntheticEvent): void => {
    if (rect) {
      onFocus(event, rect);
    }
  };

  return React.createElement(
    !disabled && href ? 'a' : 'span',
    {
      className,
      onFocus: handleFocus,
      onClick: handleFocus,
      ref,
    },
    [prefix, text, suffix]
  );
}
