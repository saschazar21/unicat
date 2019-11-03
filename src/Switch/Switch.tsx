import React, { useState, KeyboardEvent, SyntheticEvent } from 'react';
import classnames from 'classnames';

import { preventDefault } from '../__tools__/helpers';

import styles from './Switch.scss';

export interface SwitchProps {
  /* rendered as checked */
  checked?: boolean;
  /* custom class name */
  className?: string;
  /* set an ID for a label */
  id?: string;
  /* grow Switch larger */
  large?: boolean;
  /* set a name */
  name: string;
  /* onClick handler */
  onClick?: (event: SyntheticEvent) => void;
  /* custom prefix */
  prefix?: string;
  /* custom suffix */
  suffix?: string;
}

export default function Switch(props: SwitchProps): JSX.Element {
  const {
    checked: initChecked,
    className: customClassName,
    large,
    name,
    onClick,
    prefix,
    suffix,
  } = props;
  const [checked, setChecked] = useState(!!initChecked);

  const className = classnames(
    { [styles.verbose]: prefix || suffix },
    styles.wrapper,
    customClassName
  );

  const handleClick = (event: SyntheticEvent): void => {
    setChecked(prevState => !prevState);

    if (onClick) {
      onClick(event);
    }
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>): void => {
    preventDefault(event);
    if (event.key === ' ' || event.key === 'Enter') {
      handleClick(event);
    }
  };

  return (
    <div
      className={className}
      data-checked={checked}
      data-prefix={prefix}
      data-suffix={suffix}
    >
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        checked={checked}
        onClick={handleClick}
        onKeyUp={handleKeyUp}
      />
      <div
        className={classnames({ [styles.large]: large }, styles.container)}
        aria-hidden="true"
      >
        <svg viewBox="0 0 16 16" className={styles.circle}>
          <circle cx="8" cy="8" r="8" />
          <circle cx="8" cy="8" r="6" />
        </svg>
      </div>
    </div>
  );
}

Switch.displayName = 'Switch';
