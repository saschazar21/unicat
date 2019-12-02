import React, {
  ReactNode,
  KeyboardEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import classnames from 'classnames';
import { ChevronIcon } from '@saschazar/unicat-icons';

import { IconButton } from '../';
import { Size } from '../__types__/global';
import { breakpoint, preventDefault } from '../__tools__/helpers';

import styles from './Slider.scss';

export const breakpoints = new Map<Size, number>([
  ['xs', 2],
  ['s', 2],
  ['m', 3],
  ['l', 4],
  ['xl', 4],
]);

export interface SliderProps {
  /** custom class name */
  className?: string;
  /** the children to display inside the Slider */
  children: ReactNode | ReactNode[];
  /** show dark mode */
  dark?: boolean;
  /** whether slider should auto scroll */
  autoscroll?: boolean;
}

export default function Slider(props: SliderProps): JSX.Element {
  const {
    autoscroll,
    className: customClassName,
    children: rawChildren,
    dark,
  } = props;

  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren];

  const className = classnames(
    styles.wrapper,
    { [styles.dark]: dark },
    customClassName
  );

  const viewportRef = useRef<HTMLDivElement>(null);
  const [auto, setAuto] = useState(autoscroll);
  const [frame, setFrame] = useState(0);
  const [transition, setTransition] = useState(0);
  const [factor, setFactor] = useState(0);
  const [visible, setVisible] = useState(2);

  useEffect(() => {
    const { current } = viewportRef;
    if (current) {
      // get first of the contained children
      const [first] = current.children;
      // get calculated margin of the first child
      const marginRight = getComputedStyle(first).marginRight;
      // get the calculated width of the first child
      const elWidth = first.clientWidth + parseInt(marginRight || '0', 10);
      // multiply frame by currently visible viewport width
      setTransition(frame * (visible * elWidth) * -1.0);
    }
  }, [frame]);

  useEffect(() => {
    const b = breakpoints.get(breakpoint());
    if (b) {
      setVisible(b);
      setFactor(b / children.length);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | number = 0;
    if (auto && factor) {
      intervalId = setInterval(
        () => setFrame(prev => (prev + 1) % Math.ceil(1.0 / factor)),
        4000
      );
    }
    if (!auto && intervalId) {
      clearInterval(intervalId as NodeJS.Timeout);
    }
    return (): void => clearInterval(intervalId as NodeJS.Timeout);
  }, [auto, factor]);

  const slideForward = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    // count frame one up, calculate using modulo of max. frame count to not overshoot.
    setFrame(prev => (prev + 1) % Math.ceil(1.0 / factor));
    setAuto(false);
  };

  const slideBack = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    // add children.length to not subtract below zero. Also use modulo like above.
    setFrame(prev => (prev + children.length) % Math.ceil(1.0 / factor));
    setAuto(false);
  };

  const handleKeyUp = (event: KeyboardEvent): void => {
    event && preventDefault(event);
    const { key } = event;

    if (key) {
      switch (key) {
        case 'ArrowRight':
          return slideForward(event);
        case 'ArrowLeft':
          return slideBack(event);
      }
    }
  };

  return (
    <div className={className} tabIndex={0} onKeyUp={handleKeyUp}>
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
        style={{ transform: `translate3d(${transition}px, 0, 0)` }}
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
