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
      color: 'rgba(30, 30, 36, 0.2)',
      spread: '2px',
      x: '0',
      y: '15px',
    },
    {
      blur: '14px',
      color: 'rgba(30, 30, 36, 0.53)',
      spread: '-7px',
      x: '0',
      y: '5px',
    },
  ],
  [
    {
      blur: '24px',
      color: 'rgba(30, 30, 36, 0.19)',
      spread: '5px',
      x: '0',
      y: '10px',
    },
    {
      blur: '10px',
      color: 'rgba(30, 30, 36, 0.25)',
      spread: '-2px',
      x: '0',
      y: '3px',
    },
  ],
  [
    {
      blur: '12px',
      color: 'rgba(30, 30, 36, 0.15)',
      spread: '7px',
      x: '0',
      y: '4px',
    },
    {
      blur: '6px',
      color: 'rgba(30, 30, 36, 0.27)',
      spread: '0px',
      x: '0',
      y: '3px',
    },
  ],
  [
    {
      blur: '9px',
      color: 'rgba(30, 30, 36, 0.09)',
      spread: '7px',
      x: '0',
      y: '3px',
    },
    {
      blur: '5px',
      color: 'rgba(30, 30, 36, 0.23)',
      spread: '1px',
      x: '0',
      y: '3px',
    },
  ],
  [
    {
      blur: '7px',
      color: 'rgba(30, 30, 36, 0.07)',
      spread: '6px',
      x: '0',
      y: '2px',
    },
    {
      blur: '3px',
      color: 'rgba(30, 30, 36, 0.25)',
      spread: '0',
      x: '0',
      y: '2px',
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
