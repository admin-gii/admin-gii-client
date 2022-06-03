import { customRender } from '@test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useForm } from 'react-hook-form';
import { Form } from './form.component';

describe('Form', () => {
  test('Should render Form component', async () => {
    const { result } = renderHook(() => useForm({
      defaultValues: { test: '' }
    }));

    const onSubmit = jest.fn();

    const { asFragment } = customRender(
      <Form form={result.current} onSubmit={onSubmit} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});