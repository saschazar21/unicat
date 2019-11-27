import React, { Component, RefObject } from 'react';
import classnames from 'classnames';

import MediaLoading from '../MediaLoading';
import withLazyLoading from '../__hoc__/withLazyLoading';
import { nativeLazyLoading } from '../__tools__/helpers';

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
  forwardedRef?: RefObject<HTMLElement>;
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

export class RawPicture extends Component<PictureProps> {
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
      className: customClassName,
      crop,
      description,
      forwardedRef,
      lazyload = false,
      loading = 'auto',
      media,
      placeholder,
      shape = 'default',
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
      { [styles.shape]: shape !== 'default', [styles.loaded]: loaded },
      customClassName
    );

    const props = {
      ...other,
      className,
      alt: description,
      media,
      ref: forwardedRef,
      onLoad: this.handleOnLoad,
    };

    const { height = '64px', width = '64px' } = this.props;

    const img = React.createElement(
      'img',
      Object.assign(
        {},
        props,
        { src, srcSet },
        lazyload && !nativeLazyLoading
          ? {
              'data-srcset': srcSet,
              'data-src': src,
              src: placeholder,
              srcSet: null,
            }
          : null,
        lazyload || nativeLazyLoading ? { loading } : null
      )
    );

    const figureClassName = classnames(styles.container, {
      [styles.crop]: crop,
    });
    const figureStyle = crop ? { height, width } : {};

    return (
      <figure className={figureClassName} style={figureStyle}>
        {img}
        {!loaded && !placeholder && (
          <MediaLoading className={styles.placeholder} />
        )}
      </figure>
    );
  }
}

export default withLazyLoading()(RawPicture);
