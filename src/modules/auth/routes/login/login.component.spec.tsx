import { customRender } from '@test-utils';
import { Login } from './login.component';

test('Should render Login component', () => {
  const { asFragment } = customRender(<Login />);

  expect(asFragment).toMatchSnapshot();
});
