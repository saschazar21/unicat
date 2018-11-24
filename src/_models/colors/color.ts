export const isHexColor = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;

export default interface IColor {
  readonly hex: string;
  readonly name: string;
}
