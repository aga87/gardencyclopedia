import { render, cleanup } from '@testing-library/react';
import Label from './Label';

afterEach(cleanup);

const defaultProps = {
  label: 'Label',
  required: false
};

test('Label renders with correct text', () => {
  const { getByText } = render(<Label {...defaultProps} />);
  expect(getByText('Label')).toBeTruthy();
  expect(getByText('Label').tagName).toBe('LABEL');
});

test('Label renders with asterisk only if it is required', () => {
  const { getByText } = render(<Label {...defaultProps} />);
  expect(getByText('Label').textContent).toBe('Label');
  cleanup();
  render(<Label {...defaultProps} required={true} />);
  expect(getByText('Label').textContent).toBe('Label *');
});
