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
  expect(screen.getByRole('button', { name: /delete/i })).toBeTruthy();
  expect(screen.getByTestId('icon-wrapper').firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<MenuDropdownButton {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByRole('button', { name: /delete/i }));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(
    <MenuDropdownButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(screen.getByRole('button', { name: /delete/i }));
  expect(handleKeyDown).toHaveBeenCalled();
});
