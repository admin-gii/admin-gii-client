import { customRender } from '@test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { SwitchField } from './switch-field.component';

describe('SwitchField', () => {
  test('Should render SwitchField component', async () => {
    const { result } = renderHook(() => useForm({
      defaultValues: { test: '' }
    }));
    const { asFragment } = customRender(
      <SwitchField name='test' control={result.current.control} label='Switch' />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});