import { renderHook } from '@testing-library/react-hooks';
import { useInputFieldProps } from './input-field.props';

describe('InputField', () => {
  test('input-field props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useInputFieldProps());
  });
})
