import { render, cleanup, fireEvent } from '@testing-library/react';
import DropdownToggleButton from './DropdownToggleButton';

afterEach(cleanup);

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  const { getByTestId } = render(<DropdownToggleButton {...defaultProps} />);
  const button = getByTestId('dropdown-toggle-button');
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <DropdownToggleButton {...defaultProps} handleClick={handleClick} />
  );
  fireEvent.click(getByTestId('dropdown-toggle-button'));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  const { getByTestId } = render(
    <DropdownToggleButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(getByTestId('dropdown-toggle-button'));
  expect(handleKeyDown).toHaveBeenCalled();
});
