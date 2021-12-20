import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import Slot from '~components/Slot';

const mockedProps = {
  amount: 1,
  index: 1,
  num: null,
  tick: 3,
};

describe('Slot component', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it('Slot should take a snapshot for initial state', () => {
    const { asFragment } = render(<Slot {...mockedProps} />);

    expect(asFragment()).toMatchSnapshot('Slot initial');
  });

  it('Slot should take a snapshot 1', async () => {
    const { asFragment } = render(
      <Slot {...mockedProps} amount={2} num={4} tick={5} />
    );

    act(() => jest.advanceTimersByTime(700));

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot('Slot 1');
    });
  });

  it('Slot should take a snapshot 2', async () => {
    const { asFragment } = render(
      <Slot {...mockedProps} amount={3} num={5} tick={6} />
    );

    act(() => jest.advanceTimersByTime(700));

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot('Slot 2');
    });
  });
});
