import { renderHook } from '@testing-library/react-hooks';
import { useCheckboxFieldProps } from './checkbox-field.props';

describe('CheckboxField', () => {
  test('checkbox-field props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useCheckboxFieldProps());
  });
})
