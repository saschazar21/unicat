import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
} from 'react';
import classnames from 'classnames';
import { ChevronIcon } from '@saschazar/unicat-icons';

import { IconButton } from '../';
import { preventDefault } from '../__tools__/helpers';

import styles from './Slider.scss';

export interface SliderProps {
  /** custom class name */
  className?: string;
  /** the children to display inside the Slider */
  children: ReactNode | ReactNode[];
  /** show dark mode */
  dark?: boolean;
  /** the starting index */
  index?: number;
  /** whether slider should auto scroll */
  autoScroll?: boolean;
}

export default function Slider(props: SliderProps): JSX.Element {
  const {
    className: customClassName,
    children: rawChildren,
    dark,
    index = 0,
  } = props;

  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  const className = classnames(
    styles.wrapper,
    { [styles.dark]: dark },
    customClassName
  );

  const factor = 1.0 / children.length;

  const [selected, setSelected] = useState(index);
  const [transition, setTransition] = useState(factor * index * -1.0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTransition(factor * selected * -1.0);
  }, [selected]);

  const slideForward = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    setSelected(prev => (prev + 1) % children.length);
  };

  const slideBack = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    setSelected(prev => (prev + children.length - 1) % children.length);
  };

  return (
    <div className={className} ref={wrapperRef}>
      <div className={styles.buttonWrapper}>
        <IconButton
          className={styles.icon}
          name="back"
          icon={<ChevronIcon aria-hidden />}
          onClick={slideBack}
          disabled={children.length < 2}
          variant="light"
        />
      </div>
      <div
        className={styles.viewport}
        style={{ transform: `translate3d(${transition * 100.0}%, 0, 0)` }}
        ref={viewportRef}
      >
        {children}
      </div>
      <div className={styles.buttonWrapper}>
        <IconButton
          className={styles.icon}
          name="forward"
          icon={<ChevronIcon aria-hidden />}
          onClick={slideForward}
          disabled={children.length < 2}
          variant="light"
        />
      </div>
    </div>
  );
}
