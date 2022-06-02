import { customRender } from '@test-utils';
import { SwitchField } from './switch-field.component';

describe('SwitchField', () => {
  test('Should render SwitchField component', async () => {
    const { asFragment } = customRender(
      <SwitchField />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});