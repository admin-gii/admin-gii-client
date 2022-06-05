import { renderHook } from '@testing-library/react-hooks';
import { useFormTypeActionProps } from './form-type-action.props';

describe('FormTypeAction', () => {
  test('form-type-action props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useFormTypeActionProps());
  });
})
