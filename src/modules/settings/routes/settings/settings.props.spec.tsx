import { renderHook } from '@testing-library/react-hooks';
import { useSettingsProps } from './settings.props';

describe('Settings', () => {
  test('settings props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useSettingsProps());
  });
})
