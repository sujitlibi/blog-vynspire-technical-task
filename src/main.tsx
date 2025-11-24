import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from './lib/error/Errorboundary.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import {
  queryClient,
  ReactQueryDevtools,
} from './api/react-query/queryClient.ts';
import { store } from './redux/store/store.ts';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ErrorBoundary>
          {process.env.NODE_ENV === 'development' ? (
            <ReactQueryDevtools initialIsOpen={false} />
          ) : null}
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
