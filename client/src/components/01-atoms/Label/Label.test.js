import { render, screen } from '@testing-library/react';
import Label from './Label';

const defaultProps = {
  label: 'Label',
  required: false
};

test('Label renders with correct text', () => {
  const {rerender} = render(<Label {...defaultProps} />);
  expect(screen.getByText('Label').textContent).toBe('Label');
  expect(screen.getByText('Label').tagName).toBe('LABEL');
  // Label renders with asterisk only if it is required
  rerender(<Label {...defaultProps} required={true} />);
  expect(screen.getByText('Label').textContent).toBe('Label *');
});
