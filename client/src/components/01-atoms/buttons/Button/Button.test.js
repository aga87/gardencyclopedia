import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const defaultProps = {
  handleClick: jest.fn(),
  text: 'Click'
};

test('Button renders with correct text', () => {
  const {rerender} = render(<Button {...defaultProps} />);
  expect(screen.getByRole('button', { name: /click/i })).toBeInTheDocument();
  rerender(<Button {...defaultProps} text='Go' />);
  expect(screen.getByRole('button', { name: /go/i })).toBeInTheDocument();
});

test('Button renders an icon if specified', () => {
  const { rerender } = render(<Button {...defaultProps} />);
  const button = screen.getByRole('button', { name: /click/i });
  expect(button.querySelector('svg')).not.toBeInTheDocument();
  rerender(<Button {...defaultProps} iconName='menu' />);
  expect(button.querySelector('svg')).toBeInTheDocument();
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<Button {...defaultProps} handleClick={handleClick} />);
  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(<Button {...defaultProps} handleKeyDown={handleKeyDown} />);
  screen.getByRole('button').focus();
  userEvent.keyboard('a');
  expect(handleKeyDown).toHaveBeenCalledTimes(1);
});
