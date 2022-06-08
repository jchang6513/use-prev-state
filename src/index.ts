import { useEffect, useRef } from 'react';

const usePrevState = <P extends unknown>(state: P) => {
  const prev = useRef<P>(state);

  useEffect(() => {
    prev.current = state;
  }, [state]);

  return prev.current;
};

export default usePrevState;
