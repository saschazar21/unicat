export interface Color {
  hex: string;
  name: string;
  variant: string;
}

export const colors: Color[] = [
  {
    hex: '#121619',
    name: 'Eerie Black',
    variant: 'default',
  },
  {
    hex: '#BEB7A4',
    name: 'Black Shadows',
    variant: 'light',
  },
  {
    hex: '#253D5B',
    name: 'Japanese Indigo',
    variant: 'primary',
  },
  {
    hex: '#FF7F11',
    name: 'Pumpkin',
    variant: 'warning',
  },
  {
    hex: '#09814A',
    name: 'Spanish Viridian',
    variant: 'success',
  },
];
