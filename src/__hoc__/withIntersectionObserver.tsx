import React, { ComponentType, FC, useEffect, useRef, useState } from 'react';

export const defaultIntersectionObserverOptions: IntersectionObserverInit = {
  rootMargin: '50px 0px',
  threshold: 0.1,
};

export default (
  options: IntersectionObserverInit = defaultIntersectionObserverOptions
) => <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => (
  componentProps: P
): JSX.Element => {
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
      data-lazyload={lazyload ? 'pending' : 'loaded'}
      forwardedRef={ref}
      lazyload={lazyload}
    />
  );
};
