import React, { Component } from 'react';
import styled from 'styled-components';
import { isHexColor } from '../../_models/colors/color';
import ISrcSet from '../../_models/media/srcset';

export interface IImageContainerProps {
  /** The image caption, used as figcaption & alt */
  readonly caption: string;
  /** the height attribute, used for fixed height */
  readonly height?: string;
  /** The background color of the container */
  readonly hex?: string;
  /** The image URL */
  readonly image: string;
  /** The border radius value */
  readonly radius?: string;
  /** The image srcset for responsive image sizes */
  readonly srcset?: ISrcSet[];
  /** Show the caption in the DOM, or make it available only for screen readers */
  readonly visibleCaption?: boolean; // TODO: Add figcaption to render()
  /** THe width attribute, for fixed width */
  readonly width?: string;
}

export default class ImageContainer extends Component<IImageContainerProps> {
  /**
   * Creates a <source> tag with a srcset attribute
   */
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
      border-radius: ${this.props.radius ? this.props.radius : 'inherit'};
      height: ${height};
      margin: 0;
      min-height: ${height};
      min-width: ${width};
      overflow: hidden;
      position: relative;
      width: ${width};
    `;
  }

  /**
   * The image as styled component. Whenever a fixed height is given as prop, the image is set to position: absolute.
   */
  get Image(): any {
    if (!this.props.height) {
      return styled.img`
        height: auto;
        width: 100%;
      `;
    }
    return styled.img`
      height: auto;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
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

  /**
   * The render function, returns JSX
   */
  public render() {
    const srcset = this.srcset;
    return (
      <this.Figure property="image" typeof="ImageObject">
        {this.props.image && (
          <picture>
            {srcset}
            <this.Image
              alt={this.props.caption}
              property="contentUrl"
              src={this.props.image}
            />
          </picture>
        )}
      </this.Figure>
    );
  }
}
