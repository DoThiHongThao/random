export const debounce = (
  func: Function,
  timeout = 250
  /* eslint-disable @typescript-eslint/no-explicit-any */
): ((...args: any) => void) => {
  let timer: NodeJS.Timeout;
  return (...args: any): void => {
    /* eslint-enable @typescript-eslint/no-explicit-any */
    global.clearTimeout(timer);
    timer = global.setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
