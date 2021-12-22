import { render, cleanup, screen } from '@testing-library/react';
import Error from './Error';

afterEach(cleanup);

const defaultProps = {
  msg: 'error'
};

test('Error renders with correct text', () => {
  render(<Error {...defaultProps} />);
  expect(screen.getByText('error')).toBeTruthy();
});
