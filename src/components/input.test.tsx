import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Input from '~components/Input';

const mockedProps = {
  min: 1,
  handleChange: jest.fn(),
  name: 'To',
};

jest.mock('../hooks', () => ({
  useDebounce: func => func,
}));

describe('Input component', () => {
  it('Input should show validation warning 1', async () => {
    render(<Input {...mockedProps} />);

    expect(
      screen.queryByText('Should be more than start value')
    ).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('To'), {
      target: { value: '0' },
    });

    await waitFor(() => {
      expect(
        screen.getByText('Should be more than start value')
      ).toBeInTheDocument();
    });
  });

  it('Input should show validation warning 2', async () => {
    render(<Input {...mockedProps} />);

    fireEvent.change(screen.getByLabelText('To'), {
      target: { value: '2.5' },
    });

    await waitFor(() => {
      expect(screen.getByText('Only integers are allowed')).toBeInTheDocument();
    });
  });
});
