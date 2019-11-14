import React, { useEffect, useRef, useState } from 'react';

import { nativeLazyLoading } from '../__tools__/helpers';

export interface LazyLoadingProps {
  loading?: 'lazy' | 'eager' | 'auto';
}

export default (
  options: IntersectionObserverInit = { rootMargin: '50px 0px', threshold: 0.1 }
) => <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> => (componentProps: P & LazyLoadingProps): JSX.Element => {
  if (
    nativeLazyLoading ||
    (componentProps && componentProps.loading === 'eager')
  ) {
    return <WrappedComponent {...(componentProps as P)} lazyload={false} />;
  }

  const [lazyload, setLazyload] = useState(true);

  const cb = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ): void | null => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return null;
    }
    observer.unobserve(entry.target);
    observer.disconnect();
    return setLazyload(false);
  };

  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver(cb, options)
  );
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
    return (): void => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <WrappedComponent
      {...(componentProps as P)}
      data-lazyload-status={lazyload ? 'pending' : 'loaded'}
      forwardedRef={ref}
      lazyload={lazyload}
    />
  );
};
