import { render, cleanup } from '@testing-library/react';
import MenuDropdownButton from './MenuDropdownButton';
import SubmitButton from './SubmitButton';

afterEach(cleanup);

const defaultProps = {
  text: 'Submit'
};

test('Button renders with correct text', () => {
  const { getByText } = render(<SubmitButton {...defaultProps} />);
  expect(getByText('Submit')).toBeTruthy();
  expect(getByText('Submit').tagName).toBe('BUTTON');
});