import React, {
  useState,
  ReactNode,
  SyntheticEvent,
  KeyboardEvent,
} from 'react';
import classnames from 'classnames';
import { ChevronIcon } from '@saschazar/unicat-icons';
import AnimateHeight from 'react-animate-height';

import Heading from '../Heading';
import { preventDefault } from '../__tools__/helpers';

import styles from './Expandable.scss';

export const ANIMATION_DEFAULT_DURATION = 300;

export interface ExpandableProps {
  /* mandatory child */
  children: ReactNode;
  /* custom className */
  className?: string;
  /* is open by default? */
  open?: boolean;
  /* the title, visible at all times */
  title: string;
}

export default function expandable(props: ExpandableProps) {
  const { children, className: customClassname, open: isOpen, title } = props;
  const [open, setOpen] = useState(!!isOpen);

  const className = classnames(
    { [styles.open]: open },
    styles.activator,
    customClassname
  );

  const handleClick = (event: SyntheticEvent) => {
    preventDefault(event);
    setOpen(o => !o);
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    preventDefault(event);
    if (event.key === 'ArrowUp' && open) {
      handleClick(event);
    }
    if (event.key === 'ArrowDown' && !open) {
      handleClick(event);
    }
    if (event.key === ' ') {
      handleClick(event);
    }
  };

  return (
    <aside className={styles.wrapper} role="region">
      <button
        className={className}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
        aria-expanded={open}
        aria-label={title}
      >
        <Heading level="h5" className={styles.title}>
          {title}
        </Heading>
        <ChevronIcon
          focusable="false"
          aria-hidden="true"
          className={styles.icon}
        />
      </button>
      <AnimateHeight
        duration={ANIMATION_DEFAULT_DURATION}
        height={open ? 'auto' : 0}
      >
        <section className={styles.content}>{children}</section>
      </AnimateHeight>
    </aside>
  );
}
