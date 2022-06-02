import { customRender } from '@test-utils';
import { screen } from '@testing-library/react';
import { FlexContainer } from './flex-container';

test('Should render FlexContainer component', () => {
  const { asFragment } = customRender(<FlexContainer />);

  expect(asFragment).toMatchSnapshot();
});

test('FlexContainer should get justify and align in props', () => {
  const JUSTIFY = 'center';
  const ALIGN = 'center';
  const WRAP = 'wrap';

  customRender(
    <FlexContainer
      data-testid='tested-flex-container'
      justify={JUSTIFY}
      align={ALIGN}
      wrap={WRAP}
    />
  );
  const elem = screen.getByTestId('tested-flex-container');
  const styles = window.getComputedStyle(elem);
  expect(styles.justifyContent).toBe(JUSTIFY);
  expect(styles.alignItems).toBe(ALIGN);
  expect(styles.flexWrap).toBe(WRAP);
});
