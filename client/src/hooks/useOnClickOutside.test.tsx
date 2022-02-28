import { createRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useOnClickOutside from './useOnClickOutside';

describe('useOnClickOutside', () => {
  test('calls handler when click is outside element', () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref}></div>);
    // Act
    renderHook(() => useOnClickOutside(ref, handler));
    userEvent.click(document.body);
    // Assert
    expect(handler).toBeCalledTimes(1);
  });

  test(`doesn't call the handler when click is within element`, () => {
    // Arrange
    const handler = jest.fn();
    const ref = createRef<HTMLDivElement>();
    render(<div ref={ref} data-testid="element-testid"></div>);
    // Act
    renderHook(() => useOnClickOutside(ref, handler));
    userEvent.click(screen.getByTestId('element-testid'));
    //  Assert
    expect(handler).not.toBeCalled();
  });
});