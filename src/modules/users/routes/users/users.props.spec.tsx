import { renderHook } from '@testing-library/react-hooks';
import { useUsersProps } from './users.props';

describe('Users', () => {
  test('users props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useUsersProps());
  });
})
