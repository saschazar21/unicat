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
import KeyGenerator from '../__tools__/key-generator';
import { preventDefault } from '../__tools__/helpers';

import styles from './Slider.scss';

export interface SliderProps {
  /** custom class name */
  className?: string;
  /** the children to display inside the Slider */
  children: ReactNode | ReactNode[];
  /** the starting index */
  index?: number;
  /** whether slider should auto scroll */
  autoScroll?: boolean;
}

export default function Slider(props: SliderProps): JSX.Element {
  const {
    className: customClassName,
    children: rawChildren,
    index = 0,
  } = props;

  const keygen = new KeyGenerator('Slider');
  const children = Array.isArray(rawChildren) ? rawChildren : [rawChildren];
  const className = classnames(styles.wrapper, customClassName);

  const [selected, setSelected] = useState(index);
  const refs = new Array(children.length || 0)
    .fill(null)
    .map(() => useRef(null));

  useEffect(() => {
    const ref = refs[selected] && refs[selected].current;
    console.log(ref);
  }, [selected]);
  const slideForward = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    setSelected(prev => (prev + 1) % refs.length);
  };

  const slideBack = (event?: SyntheticEvent): void => {
    event && preventDefault(event);
    setSelected(prev => (prev + refs.length - 1) % refs.length);
  };

  return (
    <div className={className}>
      <IconButton
        className={styles.icon}
        name="back"
        icon={<ChevronIcon aria-hidden />}
        onClick={slideBack}
        disabled={!refs.length}
        variant="light"
      />
      <div className={styles.viewport}>
        {children.map((c, i) => (
          <div key={keygen.next()} ref={refs[i]}>
            {c}
          </div>
        ))}
      </div>
      <IconButton
        className={styles.icon}
        name="forward"
        icon={<ChevronIcon aria-hidden />}
        onClick={slideForward}
        disabled={!refs.length}
        variant="light"
      />
    </div>
  );
}
