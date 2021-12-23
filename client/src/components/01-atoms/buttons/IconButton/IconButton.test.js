import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import IconButton from './IconButton';

const defaultProps = {
  handleClick: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  render(<IconButton {...defaultProps} />);
  const button = screen.getByRole('button');
  expect(button).not.toHaveTextContent();
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<IconButton {...defaultProps} handleClick={handleClick} />);
  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
