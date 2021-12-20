import { render, cleanup, fireEvent } from '@testing-library/react';
import Tab from './Tab';

afterEach(cleanup);

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  text: 'Tab',
  selected: false
};

test('Tab renders with correct text', () => {
  const { getByText } = render(<Tab {...defaultProps} />);
  const tab = getByText('Tab');
  expect(tab).toBeTruthy();
  expect(tab.tagName).toBe('BUTTON');
});

test('Tab calls correct function on click', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <Tab {...defaultProps} handleClick={handleClick} />
  );
  fireEvent.click(getByTestId('tab'));
  expect(handleClick).toHaveBeenCalled();
});

test('Tab calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  const { getByTestId } = render(
    <Tab {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(getByTestId('tab'));
  expect(handleKeyDown).toHaveBeenCalled();
});

test('Tab is accessible', () => {
  const { getByTestId } = render(<Tab {...defaultProps} />);
  const tab = getByTestId('tab');
  expect(tab).toHaveAttribute('role', 'tab');
  expect(tab).toHaveAttribute('aria-selected');
  // expect(tab).toHaveAttribute('aria-controls'); // not in the debug output - why?
});
