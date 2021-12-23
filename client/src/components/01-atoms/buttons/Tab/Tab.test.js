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
  expect(screen.getByRole('tab', { name: /tab/i })).toBeTruthy();
});

test('Tab calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Tab {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByRole('tab', { name: /tab/i }));
  expect(handleClick).toHaveBeenCalled();
});

test('Tab calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Tab {...defaultProps} handleKeyDown={handleKeyDown} />);
  fireEvent.keyDown(screen.getByRole('tab', { name: /tab/i }));
  expect(handleKeyDown).toHaveBeenCalled();
});

test('Tab is accessible', () => {
  render(<Tab {...defaultProps} />);
  const tab = screen.getByRole('tab', { name: /tab/i });
  expect(tab).toHaveAttribute('aria-selected');
  expect(tab).toHaveAttribute('aria-controls');
});
