import { customRender } from '@test-utils';
import { LeftSidebar } from './left-sidebar.component';

describe('LeftSidebar', () => {
  test('Should render LeftSidebar component', async () => {
    const { asFragment } = customRender(
      <LeftSidebar />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});