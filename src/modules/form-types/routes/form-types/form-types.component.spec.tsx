import { customRender } from '@test-utils';
import { FormTypes } from './form-types.component';

describe('FormTypes', () => {
  test('Should render FormTypes component', async () => {
    const { asFragment } = customRender(
      <FormTypes />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});