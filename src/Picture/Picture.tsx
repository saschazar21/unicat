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
  crop?: boolean;
  description: string;
  height?: string;
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
      url: string;
      width: string;
    }
  ];
  src: string;
  shape?: 'round' | 'rounded' | 'default';
  width?: string;
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
      crop,
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
      srcSet: Array.isArray(srcset) && srcset.map(({ url, width }) => `${url} ${width}`).join(', '),
    };

    const { height = '64px', width = '64px' } = this.props;

    const img = React.createElement(AMP ? 'amp-img' : 'img', props);
    return crop ? <figure className={styles.crop} style={{ height, width }}>{img}</figure> : img;
  }
}
