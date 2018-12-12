import React, { Component, ReactElement } from 'react';
import { style } from 'typestyle';

export interface IComboTextProps {
  readonly children: string;
  readonly fill?: string;
  readonly tag?: string;
  readonly icon: ReactElement<SVGElement>;
}

export default class ComboText extends Component<IComboTextProps> {
  get style(): string {
    return style({
      $nest: {
        '& > svg': {
          display: 'inline-block',
          fill: this.props.fill || 'currentColor',
          height: '1em',
          marginRight: '.5rem',
          width: 'auto',
        },
      },
      alignItems: 'center',
      display: 'inline-flex',
    });
  }

  public render(): JSX.Element {
    const { children, icon, tag } = this.props;
    const Element = tag || 'span';
    return (
      <Element className={this.style}>
        {icon}
        <span>{children}</span>
      </Element>
    );
  }
}
