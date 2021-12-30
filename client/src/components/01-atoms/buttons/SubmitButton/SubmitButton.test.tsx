import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

const defaultProps = {
  text: 'Submit'
};

test('Button renders with correct text', () => {
  render(<SubmitButton {...defaultProps} />);
  expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
});
