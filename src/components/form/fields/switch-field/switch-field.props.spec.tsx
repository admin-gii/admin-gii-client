import { renderHook } from '@testing-library/react-hooks';
import { useSwitchFieldProps } from './switch-field.props';

describe('SwitchField', () => {
  test('switch-field props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useSwitchFieldProps());
  });
})
