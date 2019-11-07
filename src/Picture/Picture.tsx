import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Picture.scss';

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    loading?: 'lazy' | 'eager' | 'auto';
  }
}

export interface SourceSet {
  url: string;
  width: number;
}

export interface PictureProps {
  className?: string;
  crop?: boolean;
  description: string;
  height?: string;
  lazyload?: boolean;
  loading?: 'lazy' | 'eager' | 'auto';
  media?: string;
  onLoad?: () => void;
  placeholder?: string;
  srcset?: SourceSet[];
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
    srcset: [],
  };

  state = {
    loaded: false,
  };

  handleOnLoad = (): void => {
    const { onLoad } = this.props;

    this.setState({ loaded: true });

    if (onLoad) {
      onLoad();
    }
  };

  public render(): JSX.Element {
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
      placeholder,
      shape = defaultShape,
      src,
      srcset,
      ...other
    } = this.props;

    const { loaded } = this.state;

    const srcSet = Array.isArray(srcset)
      ? srcset.map(({ url, width }) => `${url} ${width}w`).join(', ')
      : null;

    const className = classnames(
      styles.wrapper,
      { [styles.shape]: shape !== defaultShape, [styles.loaded]: loaded },
      customClassName
    );

    const props = {
      ...other,
      className,
      alt: description,
      media,
      onLoad: this.handleOnLoad,
    };

    const { height = '64px', width = '64px' } = this.props;

    const img = React.createElement(
      'img',
      Object.assign(
        {},
        props,
        { src, srcSet },
        lazyload && !this.nativeLazyLoading
          ? {
              'data-srcset': srcSet,
              'data-src': src,
              src: placeholder,
              srcSet: null,
            }
          : null,
        lazyload || this.nativeLazyLoading ? { loading } : null
      )
    );

    return crop ? (
      <figure className={styles.crop} style={{ height, width }}>
        {img}
      </figure>
    ) : (
      img
    );
  }
}
