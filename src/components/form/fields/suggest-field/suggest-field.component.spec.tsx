import { customRender } from '@test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { SuggestField } from './suggest-field.component';

describe('SuggestField', () => {
  test('Should render SuggestField component', async () => {
    const { result } = renderHook(() => useForm({
      defaultValues: { test: '' }
    }));
    const { asFragment } = customRender(
      <SuggestField name='test' control={result.current.control} items={[]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});