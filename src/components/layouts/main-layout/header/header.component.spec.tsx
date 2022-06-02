import { customRender } from '@test-utils';
import { Header } from './header.component';

describe('Layout Header', () => {
  test('Should render Header component', async () => {
    const { asFragment } = customRender(
      <Header />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});