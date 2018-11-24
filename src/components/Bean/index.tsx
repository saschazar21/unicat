import React, { Component } from 'react';

import IColor from '../../_models/colors/color';
import './index.scss';

export interface IBeanProps extends IColor {
  readonly column?: boolean;
  readonly description?: string;
  readonly image?: string;
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

  public render() {
    let beanStyle: React.CSSProperties = {
      backgroundColor: this.props.hex || '#FFF',
    };
    beanStyle = this.props.size
      ? {
          ...beanStyle,
          height: this.props.size,
          minHeight: this.props.size,
          minWidth: this.props.size,
          width: this.props.size,
        }
      : beanStyle;
    return (
      <div
        className="bean"
        style={{
          flexDirection: this.props.column ? this.column : this.row,
          textAlign: this.props.column ? 'center' : 'left',
        }}
      >
        <figure className="bean__figure" style={beanStyle}>
          {this.props.image && this.props.image.length > 0 ? (
            <img
              className="bean__image"
              src={this.props.image}
              alt={`Image of ${this.props.name}`}
            />
          ) : null}
        </figure>
        <p>
          <strong>{this.props.name}</strong>
          <br />
          {this.props.description || this.props.hex ? (
            <span>{this.props.description || this.props.hex}</span>
          ) : null}
        </p>
      </div>
    );
  }
}
