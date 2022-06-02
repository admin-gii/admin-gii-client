import { renderHook } from '@testing-library/react-hooks';
import { useErrorProps } from './error.props';

describe('Error', () => {
  test('error props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useErrorProps());
  });
})
