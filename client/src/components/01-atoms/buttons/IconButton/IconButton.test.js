import { render, fireEvent, screen } from '@testing-library/react';
import IconButton from './IconButton';

const defaultProps = {
  handleClick: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  render(<IconButton {...defaultProps} />);
  const button = screen.getByTestId('icon-button');
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<IconButton {...defaultProps} handleClick={handleClick} />);
  fireEvent.click(screen.getByTestId('icon-button'));
  expect(handleClick).toHaveBeenCalled();
});
