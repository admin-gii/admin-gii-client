import { renderHook } from '@testing-library/react-hooks';
import { useUsersActionProps } from './users-action.props';

describe('UsersAction', () => {
  test('users-action props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useUsersActionProps());
  });
})
