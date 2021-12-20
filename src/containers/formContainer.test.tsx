import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import FormContainer from '~containers/FormContainer';

const mockedProps = {
  onClear: jest.fn(),
  onGenerate: jest.fn(),
  onSetMaxValue: jest.fn(),
};

jest.mock('../hooks', () => ({
  useDebounce: func => func,
}));

describe('FormContainer component', () => {
  it('FormContainer should disable generate btn and hide clear btn', () => {
    render(<FormContainer {...mockedProps} />);

    expect(screen.getByText('Generate !')).toBeDisabled();
    expect(
      screen.queryByRole('button', { name: 'Clear' })
    ).not.toBeInTheDocument();
  });

  it('FormContainer should enable generate btn', async () => {
    render(<FormContainer {...mockedProps} />);

    fireEvent.change(screen.getByLabelText('From'), {
      target: { value: '0' },
    });

    fireEvent.change(screen.getByLabelText('To'), {
      target: { value: '1' },
    });

    await waitFor(() => {
      expect(screen.getByText('Generate !')).toBeEnabled();
      expect(
        screen.queryByRole('button', { name: 'Clear' })
      ).not.toBeInTheDocument();
    });
  });

  it('FormContainer should show clear btn', async () => {
    render(<FormContainer {...mockedProps} />);

    fireEvent.change(screen.getByLabelText('From'), {
      target: { value: '0' },
    });

    fireEvent.change(screen.getByLabelText('To'), {
      target: { value: '1' },
    });

    fireEvent.click(screen.getByText('Generate !'));

    await waitFor(() => {
      expect(screen.queryByText('Generate !')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
    });
  });

  it('FormContainer should clean up form', async () => {
    render(<FormContainer {...mockedProps} />);

    fireEvent.change(screen.getByLabelText('From'), {
      target: { value: '0' },
    });

    fireEvent.change(screen.getByLabelText('To'), {
      target: { value: '1' },
    });

    fireEvent.click(screen.getByText('Generate !'));
    fireEvent.click(screen.getByText('Clear'));

    await waitFor(() => {
      expect(screen.getByLabelText('To')).not.toHaveAttribute('min');
      expect(
        screen.queryByRole('button', { name: 'Clear' })
      ).not.toBeInTheDocument();
    });
  });
});
