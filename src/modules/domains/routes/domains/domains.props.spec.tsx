import { renderHook } from '@testing-library/react-hooks';
import { useDomainsProps } from './domains.props';

describe('Domains', () => {
  test('domains props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useDomainsProps());
  });
})
