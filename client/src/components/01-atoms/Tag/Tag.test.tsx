import { render, screen } from '@testing-library/react';
import Tag from './Tag';

const defaultProps = {
  tag: 'some tag'
};

test('Tag renders with correct (capitalized) text', () => {
  render(<Tag {...defaultProps} />);
  expect(screen.getByText('Some tag')).toBeInTheDocument();
});
