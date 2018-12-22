import React, { Component, ReactElement } from 'react';
import { style } from 'typestyle';
import { primary } from '../../_data/colors';
import ComboText from '../ComboText';

export interface IChipProps {
  /** The string to display in a Chip */
  readonly children: string;
  /** The border color of the Chip */
  readonly color?: string;
  /** An optional icon */
  readonly icon?: ReactElement<SVGElement>;
  /** onClick handler function */
  readonly onClick?: () => void;
}

export default class Chip extends Component<IChipProps> {
  /**
   * Getter for the styling of the Chip
   */
  get style(): string {
    const { color } = this.props;
    return style({
      borderColor: color || primary.hex,
      borderRadius: '4px',
      borderStyle: 'solid',
      borderWidth: '0.5px',
      padding: '0.5em 1em',
    });
  }

  /**
   * Constructor function, validates, if icon was given, when onClick prop is present
   * @param props The props for the Chip
   */
  constructor(props: IChipProps) {
    super(props);

    const { icon, onClick } = props;
    if (onClick && !icon) {
      throw new Error('If onClick is present, icon prop must be given too!');
    }
  }

  /**
   * The render function, renders either a normal span, or a ComboText, if an icon was given
   */
  public render() {
    const { children, icon, onClick } = this.props;
    const Element = icon || onClick ? ComboText : 'span';

    const props = {
      className: this.style,
      fill: this.props.color,
      icon,
      tag: onClick ? 'button' : 'span',
    };

    return <Element {...props}>{children}</Element>;
  }
}
