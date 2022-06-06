import { customRender } from '@test-utils';
import { UsersAction } from './users-action.component';

describe('UsersAction', () => {
  test('Should render UsersAction component', async () => {
    const { asFragment } = customRender(
      <UsersAction />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});