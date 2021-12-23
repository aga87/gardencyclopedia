import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

const defaultProps = {
  handleClick: jest.fn(),
  text: 'Click'
};

test('Button renders with correct text', () => {
  render(<Button {...defaultProps} />);
  expect(screen.queryByText('Click')).toBeTruthy();
  expect(screen.queryByText('Click').tagName).toBe('BUTTON');
  // Change props
  render(<Button {...defaultProps} text='Go' />);
  expect(screen.queryByText('Go')).toBeTruthy();
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Button {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByText(defaultProps.text));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Button {...defaultProps} handleKeyDown={handleKeyDown} />);
  fireEvent.keyDown(screen.getByText(defaultProps.text));
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
