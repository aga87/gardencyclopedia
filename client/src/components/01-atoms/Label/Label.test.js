import { render, cleanup, screen } from '@testing-library/react';
import Label from './Label';

afterEach(cleanup);

const defaultProps = {
  label: 'Label',
  required: false
};

test('Label renders with correct text', () => {
  render(<Label {...defaultProps} />);
  expect(screen.getByText('Label')).toBeTruthy();
  expect(screen.getByText('Label').tagName).toBe('LABEL');
});

test('Label renders with asterisk only if it is required', () => {
  const { rerender } = render(<Label {...defaultProps} />);
  expect(screen.getByText('Label').textContent).toBe('Label');
  rerender(<Label {...defaultProps} required={true} />);
  expect(screen.getByText('Label').textContent).toBe('Label *');
});
