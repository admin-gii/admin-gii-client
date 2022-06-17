import ReactDOM from 'react-dom';
import { App } from './app.component';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store';
import { GlobalStyles } from './styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from '@components/error-boundary';
import { theme } from './styles';
import fetchIntercept from 'fetch-intercept';
import { storageService } from './services/storage.service';
import { commonActions } from './store/common/common.slice';
import { FC } from 'react';
import { HotkeysProvider } from '@blueprintjs/core';
import './styles/index.css';

interface InterceptError extends Error {
  status?: string | number;
  body?: any;
}

fetchIntercept.register({
  request: function (url, config) {
    if (config?.headers)
      config.headers.Authorization = storageService.getAccessToken();
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occurred during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: res => {
    if (res.status === 401) {
      storageService.removeRefreshToken();
      storageService.removeAccessToken();
      storageService.deleteCookie('shared_token');
      store.dispatch(commonActions.removeProfile());
    }
    if (!res.ok) {
      const error: InterceptError = new Error('Oops! Something went wrong!');
      error.status = res.status;
      error.body = res.json();
      throw error;
    }
    return res;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

export const GlobalWrapper: FC = ({ children }) => {
  return (
    <HotkeysProvider>
      <BrowserRouter>
        <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </BrowserRouter>
    </HotkeysProvider>
  );
};

ReactDOM.render(
  <ErrorBoundary>
    <GlobalWrapper>
      <App />
    </GlobalWrapper>
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    console.log('SW: onUpdate');
  },
  onSuccess: registration => {
    console.log('SW: onSuccess');
  }
});
