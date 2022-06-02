import { renderHook } from '@testing-library/react-hooks';
import { useFormProps } from './form.props';

describe('Form', () => {
  test('form props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useFormProps());
  });
})
