import { useEffect, useRef } from 'react';

export const usePrevState = <P extends unknown>(state: P) => {
  const prev = useRef<P>(state);

  useEffect(() => {
    prev.current = state;
  }, [state]);

  return prev.current;
};
