import { render, cleanup } from '@testing-library/react';
import Tag from './Tag';

afterEach(cleanup);

const defaultProps = {
  tag: 'tag'
};

test('Tag renders with correct (capitalized) text', () => {
  const { getByText } = render(<Tag {...defaultProps} />);
  expect(getByText('Tag')).toBeTruthy();
});