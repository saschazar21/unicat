import React, {
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
} from 'react';
import classnames from 'classnames';
import { ChevronIcon } from '@saschazar/unicat-icons';

import Heading from '../Heading';
import { animationFrame } from '../__tools__/hooks';
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
  const [height, setHeight] = useState(0);
  const ref = useRef(0);
  const contentRef = useRef<HTMLElement>();

  const { progress, animate } = animationFrame(ANIMATION_DEFAULT_DURATION, () =>
    setOpen(o => !o)
  );

  useEffect(() => {
    const { current: { scrollHeight = 0 } = {} } = contentRef;
    const percentage = open ? 1 - progress : progress;
    setHeight(Math.round(scrollHeight * percentage));
  }, [progress]);

  const className = classnames(
    { [styles.open]: open },
    styles.activator,
    customClassname
  );

  const handleClick = (event: SyntheticEvent) => {
    preventDefault(event);
    ref.current = requestAnimationFrame(animate);
  };

  return (
    <aside className={styles.wrapper}>
      <button className={className} onClick={handleClick}>
        <Heading level="h4" className={styles.title}>
          {title}
        </Heading>
        <ChevronIcon className={styles.icon} />
      </button>
      <section
        className={styles.content}
        style={{ maxHeight: `${height}px` }}
        ref={contentRef as MutableRefObject<HTMLElement>}
      >
        {children}
      </section>
    </aside>
  );
}
