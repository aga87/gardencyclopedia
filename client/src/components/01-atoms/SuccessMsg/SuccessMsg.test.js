import { render, screen } from '@testing-library/react';
import SuccessMsg from './SuccessMsg';

const defaultProps = {
  msg: 'Success'
};

test('SuccessMsg renders with correct text', () => {
  render(<SuccessMsg {...defaultProps} />);
  expect(screen.getByText('Success')).toBeTruthy();
});

test('SuccessMsg is accessible', () => {
  render(<SuccessMsg {...defaultProps} />);
  expect(screen.getByRole('status')).toBeTruthy();
});
