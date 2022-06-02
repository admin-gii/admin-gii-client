import { customRender } from '@test-utils';
import { Settings } from './settings.component';

describe('Settings', () => {
  test('Should render Settings component', async () => {
    const { asFragment } = customRender(
      <Settings />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});