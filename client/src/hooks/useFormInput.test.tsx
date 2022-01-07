import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useFormInput from './useFormInput';

describe('useFormInput', () => {
  test('returns initial value without user input', () => {
    // Arrange
    const initialValue = 'value'
    // Act
    const { result } = renderHook(() => useFormInput(initialValue));
    // Assert
    expect(result.current.value).toEqual(initialValue);
  });

  test('updates input value with user input (on change)', () => {
    // Arrange
    const initialValue = '';
    const event = {
        target: { value: 'value' }
      } as React.ChangeEvent<HTMLInputElement>;
    // Act
    const { result } = renderHook(() => useFormInput(initialValue));
    act(() => { result.current.handleChange(event); });
    // Assert
    expect(result.current.value).toEqual('value');
  });
});