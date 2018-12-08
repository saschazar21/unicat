import React, { Component, CSSProperties, ReactElement } from 'react';
import { style } from 'typestyle';

export interface IIconContainerProps {
  /** The only allowed children should be an SVG */
  readonly children: ReactElement<SVGElement>;
  /** The custom class name */
  readonly className?: string;
  /** The border radius */
  readonly radius?: number | string;
  /** An inline style prop */
  readonly style?: CSSProperties;
}

export default class IconContainer extends Component<IIconContainerProps> {
  /**
   * Get the default styles for the icon container
   */
  get style(): string {
    return style({
      borderRadius: this.props.radius || 0,
      overflow: 'hidden',
      padding: '1em',
      textAlign: 'center',
    });
  }

  /**
   * The render function
   */
  public render() {
    const { children, className, ...props } = this.props;
    const css = `${this.style} ${className || ''}`;
    return (
      <figure className={css} {...props}>
        {children}
      </figure>
    );
  }
}
