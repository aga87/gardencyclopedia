import { render, screen } from '@testing-library/react';
import Subtitle from './Subtitle';

const defaultProps = {
  subtitle: 'Some subtitle'
};

test('Subtitle renders with correct text', () => {
  render(<Subtitle {...defaultProps} />);
  expect(screen.getByText('Some subtitle')).toBeTruthy();
});