import { render, screen, fireEvent } from '@testing-library/react';
import DropdownToggleButton from './DropdownToggleButton';

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  render(<DropdownToggleButton {...defaultProps} />);
  const button = screen.getByTestId('dropdown-toggle-button');
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<DropdownToggleButton {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByTestId('dropdown-toggle-button'));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(
    <DropdownToggleButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(screen.getByTestId('dropdown-toggle-button'));
  expect(handleKeyDown).toHaveBeenCalled();
});
