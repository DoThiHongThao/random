import React from 'react';
import { render } from '@testing-library/react';
import Header from '~components/Header';

describe('Header component', () => {
  it('Header should take a snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot('Header');
  });
});
