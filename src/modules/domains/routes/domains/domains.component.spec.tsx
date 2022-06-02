import { customRender } from '@test-utils';
import { Domains } from './domains.component';

describe('Domains', () => {
  test('Should render Domains component', async () => {
    const { asFragment } = customRender(
      <Domains />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});