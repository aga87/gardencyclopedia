import React from 'react';
import Button from './Button';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = {
  handleClick: jest.fn(),
  text: 'Click'
};

test('Button renders with correct text', () => {
  const { queryByText } = render(<Button {...defaultProps} />);
  expect(queryByText('Click')).toBeTruthy();
  expect(queryByText('Click').tagName).toBe('BUTTON');
  // Change props
  render(<Button {...defaultProps} text='Go' />);
  expect(queryByText('Go')).toBeTruthy();
});

test('Button calls correct function on click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button {...defaultProps} handleClick={handleClick} />
  );
  fireEvent.click(getByText(defaultProps.text));
  expect(handleClick).toHaveBeenCalled();
});

test('Button calls correct function on key down', () => {
  const handleKeyDown = jest.fn();
  const { getByText } = render(
    <Button {...defaultProps} handleKeyDown={handleKeyDown} />
  );
  fireEvent.keyDown(getByText(defaultProps.text));
  expect(handleKeyDown).toHaveBeenCalled();
});

test('Button renders an icon if specified', () => {
  const { getByText, queryByTestId, getByTestId } = render(
    <Button {...defaultProps} />
  );
  expect(queryByTestId('icon-wrapper')).toBeFalsy();
  cleanup();
  // Specify icon
  render(<Button {...defaultProps} iconName='menu' />);
  const iconWrapper = getByTestId('icon-wrapper');
  expect(getByText(defaultProps.text)).toContainElement(iconWrapper);
  expect(iconWrapper.firstChild.tagName).toBe('svg');
});
