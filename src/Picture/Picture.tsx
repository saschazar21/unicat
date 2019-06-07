import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Picture.scss';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto';
  }
}

export interface PictureProps {
  className?: string;
  crop?: boolean;
  description: string;
  height?: string;
  lazyload?: boolean;
  loading?: 'lazy' | 'eager' | 'auto';
  media?: string;
  sizes?: {
    mediaQuery?: string;
    width: string;
  }[];
  srcset?: {
    url: string;
    width: string;
  }[];
  src: string;
  shape?: 'round' | 'rounded' | 'default';
  width?: string;
}

export default class Picture extends Component<PictureProps> {
  private nativeLazyLoading = 'loading' in HTMLImageElement.prototype;

  static defaultProps = {
    lazyload: false,
    loading: 'auto',
    shape: 'default',
    sizes: [],
    srcset: [],
  };

  public render() {
    const {
      lazyload: defaultLazyLoad,
      loading: defaultLoading,
      shape: defaultShape,
    } = Picture.defaultProps;

    const {
      className: customClassName,
      crop,
      description,
      lazyload = defaultLazyLoad,
      loading = defaultLoading,
      media,
      shape = defaultShape,
      sizes,
      srcset,
      src,
      ...other
    } = this.props;

    const srcSet =
      Array.isArray(srcset) &&
      srcset.map(({ url, width }) => `${url} ${width}`).join(', ');

    const source =
      this.nativeLazyLoading || !lazyload
        ? { src, srcSet }
        : { dataSrc: src, dataSrcSet: srcSet };

    const className = classnames(
      styles.wrapper,
      { [styles.shape]: shape !== defaultShape },
      customClassName
    );

    const props = {
      ...other,
      ...source,
      className,
      description,
      loading,
      media,
      sizes:
        Array.isArray(sizes) &&
        sizes
          .map(({ mediaQuery = '', width }) => `${mediaQuery} ${width}`)
          .join(', '),
    };

    const { height = '64px', width = '64px' } = this.props;

    const img = React.createElement('img', props);
    return crop ? (
      <figure className={styles.crop} style={{ height, width }}>
        {img}
      </figure>
    ) : (
      img
    );
  }
}
