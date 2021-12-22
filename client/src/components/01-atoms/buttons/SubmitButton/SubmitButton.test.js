import { render, cleanup, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

afterEach(cleanup);

const defaultProps = {
  text: 'Submit'
};

test('Button renders with correct text', () => {
  render(<SubmitButton {...defaultProps} />);
  expect(screen.getByText('Submit')).toBeTruthy();
  expect(screen.getByText('Submit').tagName).toBe('BUTTON');
});
