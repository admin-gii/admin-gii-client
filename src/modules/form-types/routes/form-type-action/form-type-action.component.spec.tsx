import { customRender } from '@test-utils';
import { FormTypeAction } from './form-type-action.component';

describe('FormTypeAction', () => {
  test('Should render FormTypeAction component', async () => {
    const { asFragment } = customRender(
      <FormTypeAction />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});