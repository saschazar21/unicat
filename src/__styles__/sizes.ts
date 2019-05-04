import { Resolution } from '__data__/definitions';

export interface MediaQuery {
  from: string;
  name: string;
  to: string;
}

export const mediaQueries: MediaQuery[] = [
  {
    from: '0px',
    name: 'phone',
    to: '768px',
  },
  {
    from: '768px',
    name: 'tablet',
    to: '1200px',
  },
  {
    from: '1200px',
    name: 'desktop',
    to: '9999px',
  },
  {
    from: '1920px',
    name: 'hd',
    to: '9999px',
  },
];

export const mediaQueryString = (
  query: Resolution,
  below?: boolean
): string => {
  const { from, to } = mediaQueries[query];
  return `@media screen and (${below ? 'max-width' : 'min-width'}: ${
    below ? to : from
  })`;
};

export const spacings = [
  '2em',
  '1.5em',
  '1em',
  '0.85em',
  '0.5em',
];