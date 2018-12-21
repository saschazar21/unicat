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
}

export default class Chip extends Component<IChipProps> {
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

  public render() {
    const { children, icon } = this.props;
    const Element = icon ? ComboText : 'span';

    const props = {
      className: this.style,
      fill: this.props.color,
      icon,
    };

    return (
      <Element {...props}>
        {children}
      </Element>
    );
  }
}
