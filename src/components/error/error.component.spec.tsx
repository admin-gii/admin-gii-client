import { customRender } from '@test-utils';
import { Error } from './error.component';

describe('Error', () => {
  test('Should render Error component', async () => {
    const { asFragment } = customRender(
      <Error />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});