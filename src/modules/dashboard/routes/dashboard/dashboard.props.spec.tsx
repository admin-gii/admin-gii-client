import { renderHook } from '@testing-library/react-hooks';
import { useDashboardProps } from './dashboard.props';

describe('Dashboard', () => {
  test('dashboard props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useDashboardProps());
  });
})
