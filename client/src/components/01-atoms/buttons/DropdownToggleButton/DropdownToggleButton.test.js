import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DropdownToggleButton from './DropdownToggleButton';

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  render(<DropdownToggleButton {...defaultProps} />);
  const button = screen.getByRole('button');
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button).not.toHaveTextContent();
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<DropdownToggleButton {...defaultProps} handleClick={handleClick} />);
  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(
    <DropdownToggleButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  const button = screen.getByRole('button');
  button.focus();
  userEvent.keyboard('a');
  expect(handleKeyDown).toHaveBeenCalledTimes(1);
});
