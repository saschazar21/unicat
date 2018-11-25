import React, { Component } from 'react';
import styled from 'styled-components';
import { isHexColor } from '../../_models/colors/color';
import ISrcSet from '../../_models/media/srcset';

export interface IImageContainerProps {
  readonly caption: string;
  readonly height?: string;
  readonly hex?: string;
  readonly radius?: number;
  readonly src: string;
  readonly srcset?: ISrcSet[];
  readonly visibleCaption?: boolean; // TODO: Add figcaption to render()
  readonly width?: string;
}

export default class ImageContainer extends Component<IImageContainerProps> {
  get srcset(): JSX.Element | null {
    if (!this.props.srcset || this.props.srcset.length < 1) {
      return null;
    }
    const srcset = this.props.srcset.map((source: ISrcSet) =>
      `${source.src}${source.width ? ` ${source.width}w` : ''}${
        source.density ? ` ${source.density}x` : ''
      }`.trim(),
    );

    return <source srcSet={srcset.join(', ')} />;
  }

  /**
   * The image wrapper as styled component
   */
  get Figure(): any {
    const height = this.props.height || 'auto';
    const width = this.props.width || '100%';
    return styled.figure`
      background-color: ${this.props.hex || '#FFF'};
      border-radius: ${this.props.radius
        ? `${this.props.radius}px`
        : 'inherit'};
      height: ${height};
      margin: 0.5rem;
      min-height: ${height};
      min-width: ${width};
      overflow: hidden;
      position: relative;
      width: ${width};
    `;
  }

  /**
   * The image as styled component.
   */
  get Image(): any {
    return styled.img`
      height: auto;
      width: 100%;
    `;
  }

  /**
   * The constructor, tests for invalid hex-codes and throws error, if necessary
   * @param props - The necessary props
   */
  constructor(props: IImageContainerProps) {
    super(props);

    if (this.props.hex && !isHexColor.test(this.props.hex)) {
      throw Error(
        `ERROR: Wrong hex-code format for 'hex' prop given: ${this.props.hex}`,
      );
    }
  }

  public render() {
    const srcset = this.srcset;
    return (
      <this.Figure property="image" typeof="ImageObject">
        {this.props.src && (
          <picture>
            {srcset}
            <this.Image
              alt={this.props.caption}
              property="contentUrl"
              src={this.props.src}
            />
          </picture>
        )}
      </this.Figure>
    );
  }
}
