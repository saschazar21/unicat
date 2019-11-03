import React, { useEffect, useState } from 'react';

import { milliseconds } from '../__tools__/helpers';

export const DATE_DEFAULT_INTERVAL = 60000;

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Intl {
  export class DateTimeFormat {
    constructor(
      locales?: string,
      options?: {
        dateStyle?: string;
        timeStyle?: string;
        localeMatcher?: string;
        timeZone?: string;
        hour12?: boolean;
        hourCycle?: string;
        formatMatcher?: string;
        weekday?: string;
        era?: string;
        year?: string;
        month?: string;
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        timeZoneName?: string;
      }
    );
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

const relativeFormat = (
  prevDate: Date
): { value: number; unit: string } | null => {
  const delta = prevDate.getTime() - Date.now();
  const filter = Object.keys(milliseconds).filter(v =>
    delta < 0 ? delta < milliseconds[v] * -1 : delta > milliseconds[v]
  );

  return filter.length
    ? { value: Math.round(delta / milliseconds[filter[0]]), unit: filter[0] }
    : null;
};

export interface DateProps {
  /* custom className */
  className?: string;
  /* date string to format */
  date: string | Date;
  /* show the raw version */
  raw?: boolean;
  /* update interval, defaults to 60000 */
  update?: number;
}

export default function DateTime(props: DateProps): JSX.Element {
  const { className, date: propsDate, raw, update } = props;
  const supported = 'RelativeTimeFormat' in Intl;
  const [language] = useState(
    navigator && navigator.language ? navigator.language : 'en'
  );

  if (typeof propsDate === 'string' && isNaN(Date.parse(propsDate))) {
    throw new Error('Invalid date format given!');
  }

  const [date] = useState(
    typeof propsDate === 'string' ? new Date(propsDate) : propsDate
  );
  const [dateString, setDateString] = useState<string>();

  const formatString = (): void => {
    if (!raw && supported) {
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
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(date)
    );
  };

  useEffect(() => {
    formatString();
    let intervalId: NodeJS.Timeout;
    if (!raw) {
      intervalId = setInterval(formatString, update || DATE_DEFAULT_INTERVAL);
    }
    return (): void => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return <span className={className}>{dateString}</span>;
}

DateTime.displayName = 'DateTime';
