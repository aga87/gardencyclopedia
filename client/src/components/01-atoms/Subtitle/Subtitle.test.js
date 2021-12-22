import { render, cleanup, screen } from '@testing-library/react';
import Subtitle from './Subtitle';

afterEach(cleanup);

const defaultProps = {
  subtitle: 'Subtitle'
};

test('Subtitle renders with correct text', () => {
  render(<Subtitle {...defaultProps} />);
  expect(screen.getByText('Subtitle')).toBeTruthy();
});