import { customRender } from '@test-utils';
import { screen } from '@testing-library/react';
import { SvgIcon } from './svg-icon.component';

describe('Atoms Context', () => {
  test('Should render Icon component', async () => {
    const { asFragment } = customRender(
      <SvgIcon data-testid='svg-icon-component' iconName={'badge-icon'} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('svg-icon-component')).toBeInTheDocument();
  });
});