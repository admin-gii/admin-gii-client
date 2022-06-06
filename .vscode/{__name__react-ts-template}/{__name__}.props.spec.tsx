import { renderHook } from '@testing-library/react-hooks';
import { use{__pascalCaseName__}Props } from './{__name__}.props';

describe('{__pascalCaseName__}', () => {
  test('{__name__} props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => use{__pascalCaseName__}Props());
  });
})
