import { customRender } from '@test-utils';
import { DomainAction } from './domain-action.component';

describe('DomainAction', () => {
  test('Should render DomainAction component', async () => {
    const { asFragment } = customRender(
      <DomainAction />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});