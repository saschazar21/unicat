import React, { Component } from 'react';
import styled from 'styled-components';

import { borderRadius } from '../__styles__/borders';
import KeyGenerator from '../__tools__/key-generator';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto';
  }
}

export interface PictureProps {
  className?: string;
  crop?: { height?: string; width?: string };
  description: string;
  lazyload: boolean;
  loading?: 'lazy' | 'eager' | 'auto';
  sources?: [
    {
      media?: string;
      sizes?: [
        {
          mediaQuery?: string;
          width: string;
        }
      ];
      srcset: [
        {
          res?: '1x' | '2x';
          url: string;
          width: string;
        }
      ];
      type?: string;
    }
  ];
  src: string;
  shape?: 'round' | 'rounded' | 'default';
}

class Picture extends Component<PictureProps> {
  static nativeLazyLoading = 'loading' in HTMLImageElement.prototype;

  static defaultProps = {
    loading: 'auto',
    shape: 'default',
    sizes: [],
  };

  private _key = new KeyGenerator('picture');

  public render() {
    const {
      className,
      description,
      lazyload,
      loading,
      sources,
      src,
    } = this.props;
    const source =
      Picture.nativeLazyLoading || !lazyload ? { src } : { dataSrc: src };

    const set =
      Array.isArray(sources) &&
      sources.map(({ media, sizes, srcset, type }) => (
        <source
          key={this._key.next()}
          media={media}
          srcSet={srcset.map(({ url, width }) => `${url} ${width}`).join(', ')}
          sizes={
            Array.isArray(sizes)
              ? sizes
                  .map(({ mediaQuery, width }) => `${mediaQuery} ${width}`)
                  .join(', ')
              : undefined
          }
          type={type}
        />
      ));

    return (
      <picture className={className}>
        {set}
        <img alt={description} loading={loading} {...source} />
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

  img {
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
`;
