import React from 'react';

/** browser supports native lazy-loading */
export const nativeLazyLoading = 'loading' in HTMLImageElement.prototype;

/** a simple no-operation function */
export const noop = (): null => null;

/** prevents an event from being fired */
export const preventDefault = (e: React.SyntheticEvent): false | void =>
  e && typeof e.preventDefault === 'function' && e.preventDefault();

/** a conversion of milliseconds to time units */
export const milliseconds: { [key: string]: number } = {
  year: 31557600000,
  month: 2629800000,
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
};
