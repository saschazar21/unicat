export interface Font {
  name: string;
  weights: number[];
}

export const googleFontsUrl = (font: Font): string => {
  const { name, weights } = font;
  return `https://fonts.googleapis.com/css?family=${name.replace(
    /\s/g,
    '+'
  )}:${weights.join(',')}`;
};

export const fonts: Font[] = [
  {
    name: 'Raleway',
    weights: [300],
  },
  {
    name: 'Muli',
    weights: [700],
  },
];

export const fontSizes: string[] = [
  '4.209em',
  '3.157em',
  '2.369em',
  '1.777em',
  '1.333em',
  '1em',
  '0.75em',
];
