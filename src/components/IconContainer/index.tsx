import React, { Component, CSSProperties, ReactElement } from 'react';
import { style } from 'typestyle';

export interface IIconContainerProps {
  /** The only allowed children should be an SVG */
  readonly children: ReactElement<SVGElement>;
  /** The custom class name */
  readonly className?: string;
  /** The fill attribute, defaults to 'currentColor' */
  readonly fill?: string;
  /** The height attribute */
  readonly height?: number | string;
  /** The border radius */
  readonly radius?: number | string;
  /** An inline style prop */
  readonly style?: CSSProperties;
  /** The width attribute */
  readonly width?: number | string;
}

export default class IconContainer extends Component<IIconContainerProps> {
  /**
   * Get the default styles for the icon container
   */
  get style(): string {
    return style({
      borderRadius: this.props.radius || 0,
      fill: this.props.fill || 'currentColor',
      height: this.props.height || 'auto',
      overflow: 'hidden',
      textAlign: 'center',
      width: this.props.width || '100%',
    });
  }

  /**
   * The constructor, it validates the given children props
   * @param props The props for this component
   */
  constructor(props: IIconContainerProps) {
    super(props);

    if (Array.isArray(props.children)) {
      throw new Error('More than one child given, only one SVG element is allowed');
    }
  }

  /**
   * The render function
   */
  public render() {
    const { children, className } = this.props;
    const css = `${className ? `${className} ` : ''}${this.style}`;
    return (
      <figure className={css} style={this.props.style}>
        {children}
      </figure>
    );
  }
}
