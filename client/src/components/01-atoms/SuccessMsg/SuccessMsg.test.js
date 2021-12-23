import { render, screen } from '@testing-library/react';
import SuccessMsg from './SuccessMsg';

const defaultProps = {
  msg: 'Success message'
};

test('SuccessMsg renders with correct text', () => {
  render(<SuccessMsg {...defaultProps} />);
  expect(screen.getByRole('status')).toHaveTextContent(/success message/i)
});
