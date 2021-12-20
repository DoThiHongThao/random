import { useRef, useLayoutEffect, useMemo } from 'react';
import { debounce } from '~utils/debounce.util';

export function useDebounce(callback, delay) {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay]
  );
}
