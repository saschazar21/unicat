import React, { Component } from 'react';
import { isHexColor } from '../../_models/colors/color';
import './index.scss';

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

  constructor(props: IBeanProps) {
    super(props);

    if (this.props.hex && !isHexColor.test(this.props.hex)) {
      throw Error(
        `ERROR: Wrong HEX-code format for 'hex' prop given: ${this.props.hex}`,
      );
    }
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
        vocab="http://schema.org/"
        typeof="Thing"
        className="bean"
        style={{
          flexDirection: this.props.column ? this.column : this.row,
          textAlign: this.props.column ? 'center' : 'left',
        }}
      >
        <figure
          property="image"
          typeof="ImageObject"
          className="bean__figure"
          style={beanStyle}
        >
          {this.props.image && this.props.image.length > 0 ? (
            <img
              property="contentUrl"
              className="bean__image"
              src={this.props.image}
              alt={`Image of ${this.props.name}`}
            />
          ) : null}
        </figure>
        <p>
          <strong property="name">{this.props.name}</strong>
          <br />
          {this.props.description || this.props.hex ? (
            <span property="description">
              {this.props.description || this.props.hex}
            </span>
          ) : null}
        </p>
      </div>
    );
  }
}
