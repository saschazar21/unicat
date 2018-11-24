import IColor from '../../_models/colors/color';

export const colorScheme: IColor[] = [
  {
    hex: '#F5EFED',
    name: 'Isabelline',
  },
  {
    hex: '#BDBF09',
    name: 'Acid Green',
  },
  {
    hex: '#2292A4',
    name: 'Light Sea Green',
  },
  {
    hex: '#D96C06',
    name: 'Spanish Orange',
  },
  {
    hex: '#4D5061',
    name: 'Independence',
  },
  {
    hex: '#0F0A0A',
    name: 'Smoky Black',
  },
];

export const background: IColor = colorScheme[0];
export const muted: IColor = colorScheme[colorScheme.length - 2];
export const primary: IColor = colorScheme[colorScheme.length - 1];
export const special: IColor = colorScheme[2];
export const success: IColor = colorScheme[1];
