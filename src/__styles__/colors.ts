import { Variant } from '../__data__/definitions';

export interface Color {
  complimentary: string;
  hex: string;
  name: string;
  variant: string;
}

export const colors: Color[] = [
  {
    complimentary: '#f7f8ee',
    hex: '#1e1e24',
    name: 'Raisin Black',
    variant: 'default',
  },
  {
    complimentary: '#1e1e24',
    hex: '#f7f8ee',
    name: 'Seashell',
    variant: 'light',
  },
  {
    complimentary: '#fdfdfb',
    hex: '#654f6f',
    name: 'Independence',
    variant: 'primary',
  },
  {
    complimentary: '#1e1e24',
    hex: '#e28413',
    name: 'Fulvous',
    variant: 'warning',
  },
  {
    complimentary: '#1e1e24',
    hex: '#94c595',
    name: 'Eton Blue',
    variant: 'success',
  },
];

export const backdrop: Color[] = [
  {
    complimentary: colors[Variant.Light].hex,
    hex: 'rgba(30, 30, 36, 0.38)',
    name: 'Raisin Black 38%',
    variant: 'default',
  },
  {
    complimentary: colors[Variant.Default].hex,
    hex: 'rgba(247, 248, 238, 0.61)',
    name: 'Seashell 61%',
    variant: 'light',
  },
  {
    complimentary: colors[Variant.Light].hex,
    hex: 'rgba(101, 79, 111, 0.38)',
    name: 'Independence 38%',
    variant: 'primary',
  },
];
