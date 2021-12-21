import { render, cleanup } from '@testing-library/react';
import Error from './Error';

afterEach(cleanup);

const defaultProps = {
  msg: 'error'
};

test('Error renders with correct text', () => {
  const { getByText } = render(<Error {...defaultProps} />);
  expect(getByText('error')).toBeTruthy();
});