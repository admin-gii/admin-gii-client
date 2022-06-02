import { renderHook } from '@testing-library/react-hooks';
import { useHeaderProps } from './header.props';

test('input props hook properties', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result } = renderHook(() =>
    useHeaderProps()
  );
});
