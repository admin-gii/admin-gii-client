import { customRender } from '@test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { MultipleSelectField } from './multiple-select-field.component';

describe('MultipleSelectField', () => {
  test('Should render MultipleSelectField component', async () => {
    const { result } = renderHook(() => useForm({
      defaultValues: { test: '' }
    }));
    const { asFragment } = customRender(
      <MultipleSelectField control={result.current.control} name='test' items={[]} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});