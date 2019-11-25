import React from 'react';
import classnames from 'classnames';

import KeyGenerator from '../__tools__/key-generator';

import styles from './MediaLoading.scss';

export interface MediaLoadingProps {
  /** custom class name */
  className?: string;
  /** whether a dark version should be displayer */
  dark?: boolean;
}

export default (props: MediaLoadingProps): JSX.Element => {
  const { className: customClassName, dark } = props;

  const id = new KeyGenerator('Loader').next();
  const className = classnames(styles.wrapper, customClassName, {
    [styles.dark]: dark,
  });

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 384"
    >
      <defs>
        <linearGradient id={id}>
          <stop className={styles.outer} offset="0%" />
          <stop className={styles.inner} offset="50%" />
          <stop className={styles.outer} offset="100%" />
          <animate
            attributeName="x2"
            from="-0.5"
            to="1.5"
            dur="4s"
            repeatCount="indefinite"
            fill="freeze"
          />
          <animate
            attributeName="x1"
            from="-1.0"
            to="1"
            dur="4s"
            repeatCount="indefinite"
            fill="freeze"
          />
        </linearGradient>
      </defs>
      <g fillRule="evenodd" fill={`url(#${id})`}>
        <path fillRule="nonzero" d="M512 0v384H0V0h512zm-8 8H8v368h496V8z" />
        <path
          fillRule="nonzero"
          d="M488 24v304H24V24h464zm-8 8H32v288h448V32z"
        />
        <path
          fillRule="nonzero"
          d="M144 176l40 64h-16l32 32h-21.714L224 304H64l45.714-32H88l32-32h-16l40-64zm0 15.094L118.434 232h20.88l-32 32h27.779l-45.714 32H198.62l-45.714-32h27.78l-32-32h20.879L144 191.094z"
        />
        <path
          fillRule="nonzero"
          d="M276 154l42 67h-16.8l33.6 33.5H312l48 33.5H192l48-33.5h-22.8l33.6-33.5H234l42-67zm-27.543 59h21.697l-33.6 33.5h28.887l-48 33.5h117.118l-48-33.5h28.887l-33.6-33.5h21.697L276 169.062 248.457 213z"
        />
        <path
          fillRule="nonzero"
          d="M34.656 194.991l52.319-46.447 46.182 15.944 60.052-46.648 15.319 23.799L256 108.861l91.68 63.303 62.175-8.049 68.472 31.519 3.346-7.268-70.563-32.481-61.411 7.951L256 99.139l-45.218 31.222-15.577-24.201-63.534 49.352-46.508-16.056-55.819 49.553zM384 56c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40zm0 8c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32z"
        />
      </g>
    </svg>
  );
};
