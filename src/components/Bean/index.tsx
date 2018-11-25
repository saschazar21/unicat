import React, { Component } from 'react';
import styled from 'styled-components';
import { isHexColor } from '../../_models/colors/color';
import ImageContainer from '../ImageContainer';

export interface IBeanProps {
  /** Render it as column (vertically aligned), otherwise as row (horizontally aligned) */
  readonly column?: boolean;
  /** The description */
  readonly description?: string;
  /** The color property as hex-code (used as background-color) */
  readonly hex?: string;
  /** The image, rendered in the round bean */
  readonly image?: string;
  /** The name */
  readonly name: string;
  /** Render text before bean */
  readonly reverse?: boolean;
  /** The size of the round bean */
  readonly size?: string;
}

export default class Bean extends Component<IBeanProps> {
  /**
   * Get the correct column styling (forward or reverse)
   */
  get column(): any {
    return `column${this.props.reverse ? '-reverse' : ''}`;
  }

  /**
   * Get the correct row styling (forward or reverse)
   */
  get row(): any {
    return `row${this.props.reverse ? '-reverse' : ''}`;
  }

  /**
   * The wrapping container as styled component
   */
  get Container(): any {
    return styled.div`
      align-items: center;
      color: inherit;
      display: flex;
      flex-direction: ${this.props.column ? this.column : this.row};
      margin: 0 1rem;
      text-align: ${this.props.column ? 'center' : 'left'};

      > figure {
        margin: 0.5rem;
      }
    `;
  }

  /**
   * The render function
   */
  public render() {
    const size = this.props.size ? this.props.size.toString() : '64px';
    return (
      <this.Container vocab="http://schema.org/" typeof="Thing">
        <ImageContainer
          caption={this.props.description || `Image of ${this.props.name}`}
          height={size}
          hex={this.props.hex}
          radius="9999px"
          image={this.props.image || ''}
          width={size}
        />
        <p
          style={{
            margin: 0,
          }}
        >
          <strong property="name">{this.props.name}</strong>
          <br />
          {this.props.description || this.props.hex ? (
            <span property="description">
              {this.props.description || this.props.hex}
            </span>
          ) : null}
        </p>
      </this.Container>
    );
  }
}
