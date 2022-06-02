import { customRender } from '@test-utils';
import { Loading } from './loading.component';

describe('Common Loading', () => {
  test('Should render Loading component', async () => {
    const { asFragment } = customRender(
      <Loading />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});