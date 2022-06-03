import { customRender } from '@test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { InputField } from './input-field.component';

describe('InputField', () => {
  test('Should render InputField component', async () => {
    const { result } = renderHook(() => useForm({
      defaultValues: { test: '' }
    }));

    const { asFragment } = customRender(
      <InputField name='test' control={result.current.control} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});