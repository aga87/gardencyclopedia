import { render, screen, fireEvent } from '@testing-library/react';
import MenuDropdownButton from './MenuDropdownButton';

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'trash',
  text: 'Delete'
};

test('Button renders an icon with text', () => {
  render(<MenuDropdownButton {...defaultProps} />);
  expect(screen.getByTestId('menu-dropdown-button').textContent).toBe('Delete');
  expect(screen.getByTestId('icon-wrapper').firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<MenuDropdownButton {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByTestId('menu-dropdown-button'));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(
    <MenuDropdownButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(screen.getByTestId('menu-dropdown-button'));
  expect(handleKeyDown).toHaveBeenCalled();
});
