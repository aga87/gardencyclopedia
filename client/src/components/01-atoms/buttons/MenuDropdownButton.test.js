import { render, cleanup, fireEvent } from '@testing-library/react';
import MenuDropdownButton from './MenuDropdownButton';

afterEach(cleanup);

const defaultProps = {
  handleClick: jest.fn(),
  handleKeyDown: jest.fn(),
  iconName: 'trash',
  text: 'Delete'
};

test('Button renders an icon with text', () => {
  const { getByTestId } = render(<MenuDropdownButton {...defaultProps} />);
  expect(getByTestId('menu-dropdown-button').textContent).toBe('Delete');
  expect(getByTestId('icon-wrapper').firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <MenuDropdownButton {...defaultProps} handleClick={handleClick} />
  );
  fireEvent.click(getByTestId('menu-dropdown-button'));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  const { getByTestId } = render(
    <MenuDropdownButton {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(getByTestId('menu-dropdown-button'));
  expect(handleKeyDown).toHaveBeenCalled();
});
