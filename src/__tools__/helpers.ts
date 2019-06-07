import React from 'react';

/** a simple no-operation function */
export const noop = () => null;

/** prevents an event from being fired */
export const preventDefault = (e: React.SyntheticEvent): false | void =>
  e && typeof e.preventDefault === 'function' && e.preventDefault();
