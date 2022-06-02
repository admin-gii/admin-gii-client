import { customRender } from '@test-utils';
import { {__pascalCaseName__} } from './{__name__}.component';

describe('{__pascalCaseName__}', () => {
  test('Should render {__pascalCaseName__} component', async () => {
    const { asFragment } = customRender(
      <{__pascalCaseName__} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});