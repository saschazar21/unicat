import React, { Component, ReactElement } from 'react';
import { style } from 'typestyle';
import IconContainer from '../IconContainer';
import ImageContainer from '../ImageContainer';

export interface IBeanProps {
  /** Render it as column (vertically aligned), otherwise as row (horizontally aligned) */
  readonly column?: boolean;
  /** The description */
  readonly description?: string;
  /** The color property as hex-code (used as background-color) */
  readonly hex?: string;
  /** The image, rendered in the round bean */
  readonly image?: ReactElement<SVGElement> | string;
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
   * Apply correct styles for the div container
   */
  get div(): string {
    return style({
      $nest: {
        '> figure': {
          margin: '0.5rem',
        },
      },
      alignItems: 'center',
      color: 'inherit',
      display: 'flex',
      flexDirection: this.props.column ? this.column : this.row,
      margin: '0 1rem',
      textAlign: this.props.column ? 'center' : 'left',
    });
  }

  /**
   * Override default styles for IconContainer in Bean
   */
  get icon(): string {
    return style({
      padding: 0,
    });
  }

  /**
   * Apply styles for the paragraph containing the name & description
   */
  get p(): string {
    return style({
      margin: 0,
    });
  }

  /**
   * The render function
   */
  public render() {
    return (
      <div className={this.div} vocab="http://schema.org/" typeof="Thing">
        {this.renderImage()}
        <p
          className={this.p}
        >
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

  private renderImage(): JSX.Element {
    const size = this.props.size ? this.props.size.toString() : '64px';
    if (!this.props.image || typeof this.props.image === 'string') {
      return (
        <ImageContainer
          caption={this.props.description || `Image of ${this.props.name}`}
          height={size}
          hex={this.props.hex}
          radius="9999px"
          image={this.props.image || ''}
          width={size}
        />
      );
    }
    return (
      <IconContainer
        className={this.icon}
        fill={this.props.hex}
        height={size}
        radius="9999px"
        width={size}
      >
        {this.props.image}
      </IconContainer>
    );
  }
}
