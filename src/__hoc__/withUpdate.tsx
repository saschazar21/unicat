import React, { useEffect, useState, FC } from 'react';

const DEFAULT_UPDATE_INTERVAL = 1000;

export interface WithUpdateProps {
  /* the interval in ms */
  interval?: number;
}

export default <P extends object>(
  WrappedComponent: React.ComponentType<P>
): FC<P & WithUpdateProps> => ({
  interval,
  ...componentProps
}: WithUpdateProps): JSX.Element => {
  const [timestamp, setTimestamp] = useState(new Date());

  useEffect(() => {
    const i = setInterval(
      () => setTimestamp(new Date()),
      interval || DEFAULT_UPDATE_INTERVAL
    );
    return (): void => clearInterval(i);
  }, [interval]);

  const props = { timestamp, ...componentProps };
  return <WrappedComponent {...(props as P)} />;
};
