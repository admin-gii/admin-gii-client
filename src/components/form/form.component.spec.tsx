import { customRender } from '@test-utils';
import { Form } from './form.component';

describe('Form', () => {
  test('Should render Form component', async () => {
    const { asFragment } = customRender(
      <Form />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});