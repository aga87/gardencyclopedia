import { render, cleanup, fireEvent } from '@testing-library/react';
import IconButton from './IconButton';

afterEach(cleanup);

const defaultProps = {
  handleClick: jest.fn(),
  iconName: 'menu',
  ariaLabel: 'menu'
};

test('Button renders an icon with accessible text', () => {
  const { getByTestId } = render(<IconButton {...defaultProps} />);
  const button = getByTestId('icon-button');
  expect(button).toHaveAttribute('aria-label', 'menu');
  expect(button.firstChild.tagName).toBe('svg');
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  const { getByTestId } = render(
    <IconButton {...defaultProps} handleClick={handleClick} />
  );
  fireEvent.click(getByTestId('icon-button'));
  expect(handleClick).toHaveBeenCalled();
});
