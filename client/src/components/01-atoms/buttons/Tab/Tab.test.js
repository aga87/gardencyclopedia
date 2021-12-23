import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  expect(screen.getByRole('tab', { name: /tab/i })).toBeInTheDocument();
});

test('Tab calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Tab {...defaultProps} handleClick={handleClick} />);
  userEvent.click(screen.getByRole('tab', { name: /tab/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Tab calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Tab {...defaultProps} handleKeyDown={handleKeyDown} />);
  const tab = screen.getByRole('tab', { name: /tab/i });
  tab.focus();
  userEvent.keyboard('{enter}');
  expect(handleKeyDown).toHaveBeenCalledTimes(1);
});

test('Tab is accessible', () => {
  render(<Tab {...defaultProps} />);
  const tab = screen.getByRole('tab', { name: /tab/i });
  expect(tab).toHaveAttribute('aria-selected');
  expect(tab).toHaveAttribute('aria-controls');
});
