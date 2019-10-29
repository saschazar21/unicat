import React, { useState, SyntheticEvent } from 'react';
import classnames from 'classnames';

import styles from './Switch.scss';

export interface SwitchProps {
  /* rendered as checked */
  checked?: boolean;
  /* custom class name */
  className?: string;
  /* the label for the checkbox */
  label: string;
  /* grow Switch larger */
  large?: boolean;
  /* set a name */
  name: string;
  /* onClick handler */
  onClick?: (event: SyntheticEvent) => void;
}

export default (props: SwitchProps) => {
  const {
    checked: initChecked,
    className: customClassName,
    label,
    large,
    name,
    onClick,
  } = props;
  const [checked, setChecked] = useState(!!initChecked);

  const className = classnames(
    styles.wrapper,
    { [styles.large]: large },
    customClassName
  );

  const handleClick = (event: SyntheticEvent) => {
    setChecked(prevState => !prevState);
    return onClick ? onClick(event) : null;
  };

  return (
    <span className={className}>
      <label className={styles.srOnly}>{label}</label>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        checked={checked}
        onClick={handleClick}
      />
      <div className={styles.container}>
        <svg viewBox="0 0 16 16" className={styles.circle}>
          <circle cx="8" cy="8" r="8" />
        </svg>
      </div>
    </span>
  );
};
