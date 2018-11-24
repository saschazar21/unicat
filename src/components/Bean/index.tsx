import React, { Component } from 'react';
import styled from 'styled-components';
import { isHexColor } from '../../_models/colors/color';

export interface IBeanProps {
  readonly column?: boolean;
  readonly description?: string;
  readonly hex?: string;
  readonly image?: string;
  readonly name: string;
  readonly reverse?: boolean;
  readonly size?: number | string;
}

export default class Bean extends Component<IBeanProps> {
  get column(): any {
    return `column${this.props.reverse ? '-reverse' : ''}`;
  }

  get row(): any {
    return `row${this.props.reverse ? '-reverse' : ''}`;
  }

  get Container(): any {
    return styled.div`
      align-items: center;
      color: inherit;
      display: flex;
      flex-direction: ${this.props.column ? this.column : this.row};
      margin: 0 1rem;
      text-align: ${this.props.column ? 'center' : 'left'};
    `;
  }

  get Figure(): any {
    const size = this.props.size ? `${this.props.size}px` : '64px';
    return styled.figure`
      background-color: ${this.props.hex || '#FFF'};
      border-radius: 9999px;
      height: ${size};
      margin: 0.5rem 1rem;
      min-height: ${size};
      min-width: ${size};
      overflow: hidden;
      position: relative;
      width: ${size};
    `;
  }

  get Image(): any {
    return styled.img`
      position: absolute;
      height: auto;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 100%;
    `;
  }

  constructor(props: IBeanProps) {
    super(props);

    if (this.props.hex && !isHexColor.test(this.props.hex)) {
      throw Error(
        `ERROR: Wrong HEX-code format for 'hex' prop given: ${this.props.hex}`,
      );
    }
  }

  public render() {
    return (
      <this.Container vocab="http://schema.org/" typeof="Thing">
        <this.Figure property="image" typeof="ImageObject">
          {this.props.image && this.props.image.length > 0 ? (
            <this.Image
              property="contentUrl"
              src={this.props.image}
              alt={`Image of ${this.props.name}`}
            />
          ) : null}
        </this.Figure>
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
