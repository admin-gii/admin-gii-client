import { renderHook } from '@testing-library/react-hooks';
import { useRolesProps } from './roles.props';

describe('Roles', () => {
  test('roles props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useRolesProps());
  });
})
