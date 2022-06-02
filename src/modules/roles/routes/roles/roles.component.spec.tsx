import { customRender } from '@test-utils';
import { Roles } from './roles.component';

describe('Roles', () => {
  test('Should render Roles component', async () => {
    const { asFragment } = customRender(
      <Roles />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});