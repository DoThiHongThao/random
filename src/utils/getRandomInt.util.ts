export const getRandomInt = (min: number, max: number): number => {
  if (isNaN(Number(min)) || isNaN(Number(max))) {
    throw new RangeError('Min and max are expected to be numbers');
  }
  if (min === max) {
    throw new RangeError('Expected max to be no less than (min + 1)');
  }

  if (min < 0) {
    throw new RangeError('Expected min to be >= 0');
  }
  const byteArray = new Uint32Array(1);
  window.crypto.getRandomValues(byteArray);

  const range = max - min + 1;
  const maxRange = 4294967295;
  if (byteArray[0] >= Math.floor(maxRange / range) * range) {
    return getRandomInt(min, max);
  }
  return min + (byteArray[0] % range);
};
