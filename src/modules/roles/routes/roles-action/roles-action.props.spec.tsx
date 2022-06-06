import { renderHook } from '@testing-library/react-hooks';
import { useRolesActionProps } from './roles-action.props';

describe('RolesAction', () => {
  test('roles-action props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useRolesActionProps());
  });
})
