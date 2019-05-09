import chroma from 'chroma-js';

import { Variant } from '../__data__/definitions';
import { colors } from './colors';

/* inset x y blur spread color */
export interface Shadow {
  blur: string;
  color: string;
  inset?: boolean;
  spread: string;
  x: string;
  y: string;
}

export const shadows: Shadow[][] = [
  [
    {
      blur: '38px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.2)
        .css(),
      spread: '19px',
      x: '0',
      y: '5px',
    },
    {
      blur: '14px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.33)
        .css(),
      spread: '9px',
      x: '0',
      y: '3px',
    },
  ],
  [
    {
      blur: '24px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.19)
        .css(),
      spread: '12px',
      x: '0',
      y: '4px',
    },
    {
      blur: '10px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.25)
        .css(),
      spread: '5px',
      x: '0',
      y: '3px',
    },
  ],
  [
    {
      blur: '18px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.12)
        .css(),
      spread: '9px',
      x: '0',
      y: '3px',
    },
    {
      blur: '9px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.2)
        .css(),
      spread: '5px',
      x: '0',
      y: '2px',
    },
  ],
  [
    {
      blur: '14px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.09)
        .css(),
      spread: '7px',
      x: '0',
      y: '2px',
    },
    {
      blur: '6px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.18)
        .css(),
      spread: '4px',
      x: '0',
      y: '1px',
    },
  ],
  [
    {
      blur: '10px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.05)
        .css(),
      spread: '5px',
      x: '0',
      y: '1px',
    },
    {
      blur: '3px',
      color: chroma(colors[Variant.Default].hex)
        .alpha(0.1)
        .css(),
      spread: '1px',
      x: '0',
      y: '0',
    },
  ],
];

export function shadowString(shadows: Shadow[]) {
  return shadows
    .map(
      ({ blur, color, inset, spread, x, y }) =>
        `${inset ? 'inset ' : ''}${x} ${y} ${blur} ${spread} ${color}`
    )
    .join(', ');
}
