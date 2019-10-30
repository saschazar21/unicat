import React, { useState, SyntheticEvent } from 'react';
import classnames from 'classnames';

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
  /* verbose mode - print on/off labels */
  verbose?: boolean;
}

export default (props: SwitchProps) => {
  const {
    checked: initChecked,
    className: customClassName,
    large,
    name,
    onClick,
    verbose,
  } = props;
  const [checked, setChecked] = useState(!!initChecked);

  const className = classnames(
    { [styles.verbose]: verbose },
    styles.wrapper,
    customClassName
  );

  const handleClick = (event: SyntheticEvent) => {
    setChecked(prevState => !prevState);
    return onClick ? onClick(event) : null;
  };

  return (
    <div className={className}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        checked={checked}
        onClick={handleClick}
      />
      <div className={classnames({ [styles.large]: large }, styles.container)}>
        <svg viewBox="0 0 16 16" className={styles.circle} aria-hidden="true">
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
    </div>
  );
};
