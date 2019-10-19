import React, { useEffect, useState } from 'react';

export const DATE_DEFAULT_INTERVAL = 1000;

declare module Intl {
  export class DateTimeFormat {
    constructor(locales?: string, options?: any);
    format(date: Date): string;
  }
  export class RelativeTimeFormat {
    constructor(
      locales?: string,
      options?: { localeMatcher?: string; numeric?: string; style?: string }
    );
    format(value: number, unit: string): string;
  }
}

const units: { [key: string]: number } = {
  year: 1000 * 60 * 60 * 24 * 7 * 30 * 12,
  month: 1000 * 60 * 60 * 24 * 7 * 30,
  week: 1000 * 60 * 60 * 24 * 7,
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  minute: 1000 * 60,
  second: 1000,
};

const relativeFormat = (prevDate: Date) => {
  const delta = prevDate.getTime() - Date.now();
  const filter = Object.keys(units).filter(v => delta < units[v] * -1);

  return filter.length
    ? { value: delta / units[filter[0]], unit: filter[0] }
    : null;
};

export interface DateProps {
  /* custom className */
  className?: string;
  /* date string to format */
  date: string | Date;
}

export default (props: DateProps) => {
  const { className, date: propsDate } = props;
  const supported = 'RelativeTimeFormat' in Intl;
  const [language, setLanguage] = useState('en');

  if (typeof propsDate === 'string' && isNaN(Date.parse(propsDate))) {
    throw new Error('Invalid date format given!');
  }

  if (navigator && navigator.language) {
    setLanguage(navigator.language);
  }

  const [date] = useState(new Date(propsDate));
  const [dateString, setDateString] = useState<string>();
  console.log(dateString);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (supported) {
        const format = relativeFormat(date);
        if (format) {
          return setDateString(
            new Intl.RelativeTimeFormat(language).format(
              format.value,
              format.unit
            )
          );
        }
      }
      return setDateString(
        new Intl.DateTimeFormat(language, {
          year: 'numberic',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        }).format(date)
      );
    }, DATE_DEFAULT_INTERVAL);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <span className={className}>{dateString}</span>;
};
