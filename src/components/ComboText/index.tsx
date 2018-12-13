import React, { Component, ReactElement } from 'react';
import { style } from 'typestyle';

export interface IComboTextProps {
  /** The children, should only contain a string, which gets wrapped in a span */
  readonly children: string;
  /** The fill value for the icon, inherits the text color by default */
  readonly fill?: string;
  /** The tag name in which to wrap the ComboText component, span by default */
  readonly tag?: string;
  /** The icon, which should prepend the text */
  readonly icon: ReactElement<SVGElement>;
}

export default class ComboText extends Component<IComboTextProps> {
  /**
   * The constructor of the ComboText, contains a validator for checking whether an icon was provided as prop
   * @param props The props, containing an icon, and optionally a fill or a tag value
   */
  constructor(props: IComboTextProps) {
    super(props);
    if (!props.icon) {
      throw new Error('No icon prop was provided!');
    }
    if (!props.children || Array.isArray(props.children)) {
      throw new Error('Only a single string is a valid children value!');
    }
  }

  /**
   * Get the class name of the underlying CSS styling
   */
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

  /**
   * The render function, renders an icon with a span text in a given container
   */
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
