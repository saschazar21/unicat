import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Picture.scss';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto';
  }
}

export interface PictureProps {
  AMP?: boolean;
  className?: string;
  crop?: { height?: string; width?: string };
  description: string;
  height?: string | number;
  lazyload: boolean;
  loading?: 'lazy' | 'eager' | 'auto';
  media?: string;
  sizes?: [
    {
      mediaQuery?: string;
      width: string;
    }
  ];
  srcset?: [
    {
      res?: '1x' | '2x';
      url: string;
      width: string;
    }
  ];
  src: string;
  shape?: 'round' | 'rounded' | 'default';
  width?: string | number;
}

export default class Picture extends Component<PictureProps> {
  static nativeLazyLoading = 'loading' in HTMLImageElement.prototype;

  static defaultProps = {
    loading: 'auto',
    shape: 'default',
    sizes: [],
    srcset: [],
  };

  public render() {
    const {
      loading: defaultLoading,
      shape: defaultShape,
    } = Picture.defaultProps;

    const {
      AMP,
      className: customClassName,
      description,
      lazyload,
      loading = defaultLoading,
      media,
      shape = defaultShape,
      sizes,
      srcset,
      src,
      ...other
    } = this.props;

    const source =
      Picture.nativeLazyLoading || !lazyload ? { src } : { dataSrc: src };

    const className = classnames(styles.wrapper, { [styles.shape]: shape !== defaultShape }, customClassName);

    const props = {
      ...other,
      ...source,
      className,
      description,
      loading,
      media,
      sizes: Array.isArray(sizes) && sizes.map(({ mediaQuery = '', width }) => `${mediaQuery} ${width}`).join(', '),
      srcSet: Array.isArray(srcset) && srcset.map(({ res = '1x', url, width }) => `${url} ${width} ${res}`).join(', '),
    };

    return React.createElement(AMP ? 'amp-img' : 'img', props);
  }
}
