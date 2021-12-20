import React from 'react';
import { render } from '@testing-library/react';
import MainContainer from '~containers/MainContainer';

jest.mock('../utils', () => ({
  getRandomInt: () => 42,
}));

jest.mock('../hooks', () => ({
  useDebounce: func => func,
}));

describe('MainContainer component', () => {
  it('MainContainer should take a snapshot', () => {
    const { asFragment } = render(<MainContainer />);

    expect(asFragment()).toMatchSnapshot('MainContainer');
  });
});
