import { customRender } from '@test-utils';
import { Dashboard } from './dashboard.component';

describe('Dashboard', () => {
  test('Should render Dashboard component', async () => {
    const { asFragment } = customRender(
      <Dashboard />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});