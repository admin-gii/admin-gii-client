import { renderHook } from '@testing-library/react-hooks';
import { useSuggestFieldProps } from './suggest-field.props';

describe('SuggestField', () => {
  test('suggest-field props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useSuggestFieldProps());
  });
})
