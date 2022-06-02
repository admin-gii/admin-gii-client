import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme-variables';
import { store } from '@store';
import { Formik } from 'formik';
import { ComponentType, FC, ReactElement } from 'react';

type AllProvidersProps = {
  formikValues: Record<string, any>;
  onSubmit: () => void;
};

const AllTheProviders: FC<AllProvidersProps> = ({
  children,
  formikValues = {},
  onSubmit = () => {}
}) => {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <Formik initialValues={formikValues} onSubmit={onSubmit}>
            {children}
          </Formik>
        </ThemeProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
};

type CustomRenderOptions = Omit<RenderOptions, 'queries' | 'wrapper'>;

export const customRender = (ui: ReactElement, options?: CustomRenderOptions) =>
  render(ui, { wrapper: AllTheProviders as ComponentType, ...options });
