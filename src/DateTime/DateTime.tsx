import React, { useEffect, useState } from 'react';

import withUpdate from '../__hoc__/withUpdate';

import { milliseconds } from '../__tools__/helpers';

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
  /* the current timestamp, (usually set by the HOC) */
  timestamp?: Date;
}

export function RawDateTime(props: DateProps): JSX.Element {
  const { className, date: propsDate, timestamp } = props;
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
    if (timestamp && supported) {
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

  useEffect(() => formatString(), [timestamp]);

  return <span className={className}>{dateString}</span>;
}

export default withUpdate(RawDateTime);

RawDateTime.displayName = 'DateTime';
