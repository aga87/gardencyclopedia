import { render, cleanup } from '@testing-library/react';
import Title from './Title';

afterEach(cleanup);

const defaultProps = {
  title: 'Some title'
};

test('Title renders with correct text', () => {
  const { getByText } = render(<Title {...defaultProps} />);
  expect(getByText('Some title')).toBeTruthy();
});