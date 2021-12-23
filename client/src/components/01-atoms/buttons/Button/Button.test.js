import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const defaultProps = {
  handleClick: jest.fn(),
  text: 'Click'
};

test('Button renders with correct text', () => {
  render(<Button {...defaultProps} />);
  expect(screen.getByRole('button', {name: /click/i})).toBeTruthy();
  // Change props
  render(<Button {...defaultProps} text='Go' />);
  expect(screen.getByRole('button', {name: /click/i})).toBeTruthy();
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Button {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Button {...defaultProps} handleKeyDown={handleKeyDown} />);
  fireEvent.keyDown(screen.getByRole('button'));
  expect(handleKeyDown).toHaveBeenCalled();
});

test('Button renders an icon if specified', () => {
  const { rerender } = render(<Button {...defaultProps} />);
  expect(screen.queryByTestId('icon-wrapper')).toBeFalsy();
  // Specify icon
  rerender(<Button {...defaultProps} iconName='menu' />);
  const iconWrapper = screen.getByTestId('icon-wrapper');
  expect(screen.getByText(defaultProps.text)).toContainElement(iconWrapper);
  expect(iconWrapper.firstChild.tagName).toBe('svg');
});
