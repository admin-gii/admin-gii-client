import { customRender } from '@test-utils';
import { Users } from './users.component';

describe('Users', () => {
  test('Should render Users component', async () => {
    const { asFragment } = customRender(
      <Users />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});