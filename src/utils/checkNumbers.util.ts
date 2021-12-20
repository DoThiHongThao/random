import { KeyboardEvent } from 'react';

export const checkNumbers = (e: KeyboardEvent<HTMLInputElement>): void => {
  const key: string | number = e.key || e.keyCode;

  if (
    key !== 'Spacebar' &&
    key !== ' ' &&
    key !== 32 &&
    (!isNaN(Number(key)) ||
      (key >= 96 && key <= 105) ||
      [',', 188, '.', 110, 190].includes(key) ||
      [
        'Backspace',
        8,
        'Delete',
        46,
        'Tab',
        9,
        'Escape',
        27,
        'Enter',
        13,
      ].includes(key) ||
      (['a', 65, 'c', 67, 'x', 88].includes(key) &&
        (e.ctrlKey === true || e.metaKey === true)) ||
      [
        'End',
        35,
        'Home',
        36,
        'ArrowLeft',
        37,
        'ArrowUp',
        38,
        'ArrowRight',
        39,
        'ArrowDown',
        40,
      ].includes(key))
  ) {
    return;
  } else {
    e.preventDefault();
  }
};
