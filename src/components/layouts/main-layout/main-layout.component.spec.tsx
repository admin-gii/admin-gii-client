import { customRender } from '@test-utils';
import { MainLayout } from './main-layout.component';

describe('MainLayout', () => {
  test('Should render MainLayout component', async () => {
    const { asFragment } = customRender(
      <MainLayout />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});