import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MenuDropdownButton from './MenuDropdownButton';

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'trash',
  text: 'Delete'
};

test('Button renders an icon with text', () => {
  render(<MenuDropdownButton {...defaultProps} />);
  const button = screen.getByRole('button', { name: /delete/i });
  expect(button).toBeInTheDocument();
  expect(button.querySelector('svg')).toBeInTheDocument();
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  render(<MenuDropdownButton {...defaultProps} handleClick={handleClick} />);
  userEvent.click(screen.getByRole('button', { name: /delete/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  render(
    <MenuDropdownButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  screen.getByRole('button', { name: /delete/i }).focus();
  userEvent.keyboard('{arrowdown}');
  expect(handleKeyDown).toHaveBeenCalledTimes(1);
});
