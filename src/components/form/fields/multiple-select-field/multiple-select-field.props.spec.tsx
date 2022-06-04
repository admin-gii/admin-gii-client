import { renderHook } from '@testing-library/react-hooks';
import { useMultipleSelectFieldProps } from './multiple-select-field.props';

describe('MultipleSelectField', () => {
  test('multiple-select-field props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useMultipleSelectFieldProps());
  });
})
