import { render, cleanup } from '@testing-library/react';
import Subtitle from './Subtitle';

afterEach(cleanup);

const defaultProps = {
  subtitle: 'Subtitle'
};

test('Subtitle renders with correct text', () => {
  const { getByText } = render(<Subtitle {...defaultProps} />);
  expect(getByText('Subtitle')).toBeTruthy();
});