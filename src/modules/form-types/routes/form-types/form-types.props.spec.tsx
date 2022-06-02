import { renderHook } from '@testing-library/react-hooks';
import { useFormTypesProps } from './form-types.props';

describe('FormTypes', () => {
  test('form-types props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useFormTypesProps());
  });
})
