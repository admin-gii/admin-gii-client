import { customRender } from '@test-utils';
import { MainLayout } from './main-layout.component';

const profile = {
  first_name: 'John',
  last_name: 'Doe',
}

describe('MainLayout', () => {
  test('Should render MainLayout component', async () => {
    const { asFragment } = customRender(
      <MainLayout />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});