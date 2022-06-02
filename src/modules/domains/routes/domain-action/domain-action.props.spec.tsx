import { renderHook } from '@testing-library/react-hooks';
import { useDomainActionProps } from './domain-action.props';

describe('DomainAction', () => {
  test('domain-action props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useDomainActionProps());
  });
})
