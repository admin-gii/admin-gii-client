import { customRender } from '@test-utils';
import { RolesAction } from './roles-action.component';

describe('RolesAction', () => {
  test('Should render RolesAction component', async () => {
    const { asFragment } = customRender(
      <RolesAction />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});