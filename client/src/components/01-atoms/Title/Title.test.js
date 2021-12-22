import { render, cleanup, screen } from '@testing-library/react';
import Title from './Title';

afterEach(cleanup);

const defaultProps = {
  title: 'Some title'
};

test('Title renders with correct text', () => {
  render(<Title {...defaultProps} />);
  expect(screen.getByText('Some title')).toBeTruthy();
});
