import { customRender } from '@test-utils';
import { screen } from '@testing-library/react';
import { ErrorBoundary } from './error-boundary.component';

describe('Common Context', () => {
  test('Should render ErrorBoundary component', () => {
    const ThrowError = () => {
      throw new Error('Error');
    };
    const { asFragment } = customRender(
      <ErrorBoundary data-testid="error-component">
        <ThrowError />
      </ErrorBoundary>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByTestId('error-component')).toBeInTheDocument();
  });
});