import React, {
  ReactNode,
  KeyboardEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';

import { noop, preventDefault } from '../../../__tools__/helpers';

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

  const className = classnames(styles.item, customClassName, {
    [styles.disabled]: disabled,
  });

  const handleFocus = (event: SyntheticEvent): void => {
    if (rect && ref.current) {
      onFocus(event, rect);
    }
  };

  const handleKeyUp = (event: KeyboardEvent): void => {
    const { currentTarget, keyCode } = event;

    preventDefault(event);

    if (ref && ref.current) {
      switch (keyCode) {
        case 13: // Enter
          ref.current.click();
          break;
        case 9: // Tab
          ref.current.focus();
          break;
        case 37: // ArrowLeft
          const prev = currentTarget.previousElementSibling as HTMLElement;
          prev && prev.focus();
          break;
        case 39: // ArrowRight
          const next = currentTarget.nextElementSibling as HTMLElement;
          next && next.focus();
          break;
      }
    }
  };

  const item = React.createElement(
    !disabled && href ? 'a' : 'span',
    {
      className,
      ref,
    },
    [prefix, text, suffix]
  );

  return (
    <li
      className={styles.wrapper}
      tabIndex={0}
      onClick={handleFocus}
      onFocus={handleFocus}
      onKeyUp={handleKeyUp}
    >
      {item}
    </li>
  );
}
