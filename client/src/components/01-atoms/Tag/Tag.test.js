import { render, cleanup, screen } from '@testing-library/react';
import Tag from './Tag';

afterEach(cleanup);

const defaultProps = {
  tag: 'tag'
};

test('Tag renders with correct (capitalized) text', () => {
  render(<Tag {...defaultProps} />);
  expect(screen.getByText('Tag')).toBeTruthy();
});
