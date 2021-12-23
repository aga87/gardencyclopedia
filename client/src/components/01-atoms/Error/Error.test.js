import { render, screen } from '@testing-library/react';
import Error from './Error';

const defaultProps = {
  msg: 'error'
};

test('Error renders with correct text', () => {
  render(<Error {...defaultProps} />);
  expect(screen.getByText('error')).toBeTruthy();
});
