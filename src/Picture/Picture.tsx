import React, { Component } from 'react';
import styled from 'styled-components';

import { Spacing } from '../__data__/definitions';
import { borderRadius } from '../__styles__/borders';
import { spacings } from '../__styles__/sizes';

export interface PictureProps {
  caption?: string;
  className?: string;
  crop?: { height?: string; width?: string };
  description: string;
  sizes?: [
    {
      mediaQuery: string;
      width: string;
    }
  ];
  srcset?: [
    {
      type?: string;
      url: string;
      width: string;
    }
  ];
  src: string;
  shape?: 'round' | 'rounded' | 'default';
}

class Picture extends Component<PictureProps> {
  static defaultProps = {
    shape: 'default',
    sizes: [],
  };

  public render() {
    const { caption, className, description, sizes, srcset, src } = this.props;

    const set = srcset && (
      <source
        srcSet={srcset.map(({ url, width }) => `${url} ${width}`).join(', ')}
        sizes={
          Array.isArray(sizes)
            ? sizes
                .map(({ mediaQuery, width }) => `${mediaQuery} ${width}`)
                .join(', ')
            : undefined
        }
      />
    );

    return (
      <picture className={className}>
        {set}
        <img src={src} alt={description} />
        {caption && <caption>{caption}</caption>}
      </picture>
    );
  }
}

export default styled(Picture)<PictureProps>`
  display: block;
  overflow: hidden;

  ${({ crop }) =>
    crop &&
    `
    position: relative;
    margin: 0 auto;
    height: ${crop.height || '100%'};
    width: ${crop.width || '100%'};
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
  `}

  img,
  caption {
    ${({ crop }) =>
      crop &&
      `
      position: absolute;
      height: auto;
      width: 100%;`}
  }

  img {
    display: block;
    ${({ crop }) =>
      crop &&
      `
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);`}
    ${({ shape }) => {
      switch (shape) {
        case 'round':
          return `border-radius: ${borderRadius.pop()};`;
        case 'rounded':
          return `border-radius: ${borderRadius.shift()};`;
        default:
          return null;
      }
    }}
    margin: 0 auto;
    max-width: 100%;
  }

  caption {
    display: block;
    margin-top: ${spacings[Spacing.S]};
    ${({ crop }) =>
      crop &&
      `
      background-color: white;
      bottom: 0;
      padding: ${spacings[Spacing.M]} 0;
      z-index: 10;`}
  }
`;
