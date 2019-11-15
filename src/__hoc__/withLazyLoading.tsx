import React, { ComponentType, FC } from 'react';

import withIntersectionObserver from './withIntersectionObserver';
import { nativeLazyLoading } from '../__tools__/helpers';

export interface LazyLoadingProps {
  loading?: 'lazy' | 'eager' | 'auto';
}

export default (options?: IntersectionObserverInit) => <P extends object>(
  WrappedComponent: ComponentType<P>
): FC<P> => (componentProps: P & LazyLoadingProps): JSX.Element => {
  if (
    nativeLazyLoading ||
    (componentProps && componentProps.loading === 'eager')
  ) {
    return <WrappedComponent {...(componentProps as P)} lazyload={false} />;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return withIntersectionObserver(options)(WrappedComponent)(componentProps)!;
};
