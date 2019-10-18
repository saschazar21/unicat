import { useRef, useState } from 'react';
import { noop } from './helpers';

export function animationFrame(
  duration: number = 500,
  terminated?: () => void
) {
  const [progress, setProgress] = useState(0);
  const onTerminate = terminated || noop;

  const ref = useRef(0);
  const progressRef = useRef(0);

  const animate = (time: number) => {
    progressRef.current = progressRef.current || time;

    const delta = time - progressRef.current;
    const percentage = Math.round((delta / duration) * 100) / 100;

    if (percentage <= 1.0) {
      setProgress(percentage);
      return (ref.current = requestAnimationFrame(animate));
    }
    progressRef.current = 0;
    onTerminate();
    return cancelAnimationFrame(ref.current);
  };

  return { progress, animate };
}
