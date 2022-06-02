import { customRender } from '@test-utils';
import { InputField } from './input-field.component';

describe('InputField', () => {
  test('Should render InputField component', async () => {
    const { asFragment } = customRender(
      <InputField />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});