import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

const defaultProps = {
  title: 'Modal title',
  id: 'modal-id', // for accessibility
  handleClose: jest.fn()
};

describe('Modal', () => {
  beforeEach(() => {
    render(
      <Modal {...defaultProps}>
        <div data-testid='modal-children' />
      </Modal>
    );
  });

  test('renders with correct title', () => {
    expect(
      screen.getByRole('dialog', { name: defaultProps.title })
    ).toBeInTheDocument();
  });

  test('renders close button with accessible text', () => {
    expect(
      screen.getByRole('button', { name: `Close ${defaultProps.title}` })
    ).toBeInTheDocument();
  });

  test('calls correct function on modal close', () => {
    userEvent.click(
      screen.getByRole('button', { name: `Close ${defaultProps.title}` })
    );
    expect(defaultProps.handleClose).toHaveBeenCalledTimes(1);
  });

  test('renders children components', () => {
    expect(screen.getByTestId('modal-children')).toBeInTheDocument();
  });
});
