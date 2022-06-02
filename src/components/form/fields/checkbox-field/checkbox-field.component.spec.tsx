import { customRender } from '@test-utils';
import { CheckboxField } from './checkbox-field.component';

describe('CheckboxField', () => {
  test('Should render CheckboxField component', async () => {
    const { asFragment } = customRender(
      <CheckboxField />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});