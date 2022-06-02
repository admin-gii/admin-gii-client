import { renderHook } from '@testing-library/react-hooks';
import { useLeftSidebarProps } from './left-sidebar.props';

describe('LeftSidebar', () => {
  test('left-sidebar props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useLeftSidebarProps());
  });
})
