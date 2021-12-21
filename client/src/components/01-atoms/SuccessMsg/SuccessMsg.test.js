import { render, cleanup } from '@testing-library/react';
import SuccessMsg from './SuccessMsg';

afterEach(cleanup);

const defaultProps = {
  msg: 'Success'
};

test('SuccessMsg renders with correct text', () => {
  const { getByText } = render(<SuccessMsg {...defaultProps} />);
  expect(getByText('Success')).toBeTruthy();
});

test('SuccessMsg is accessible', () => {
  const { getByRole } = render(<SuccessMsg {...defaultProps} />);
  expect(getByRole('status')).toBeTruthy();
});
