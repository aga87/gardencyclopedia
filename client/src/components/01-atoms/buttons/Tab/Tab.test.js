import { render, screen, fireEvent } from '@testing-library/react';
import Tab from './Tab';

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  text: 'Tab',
  selected: false,
  tabPanelId: 'id'
};

test('Tab renders with correct text', () => {
  render(<Tab {...defaultProps} />);
  const tab = screen.getByText('Tab');
  expect(tab).toBeTruthy();
  expect(tab.tagName).toBe('BUTTON');
});

test('Tab calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Tab {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByTestId('tab'));
  expect(handleClick).toHaveBeenCalled();
});

test('Tab calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Tab {...defaultProps} handleKeyDown={handleKeyDown} />);
  fireEvent.keyDown(screen.getByTestId('tab'));
  expect(handleKeyDown).toHaveBeenCalled();
});

test('Tab is accessible', () => {
  render(<Tab {...defaultProps} />);
  const tab = screen.getByTestId('tab');
  expect(tab).toHaveAttribute('role', 'tab');
  expect(tab).toHaveAttribute('aria-selected');
  expect(tab).toHaveAttribute('aria-controls');
});
