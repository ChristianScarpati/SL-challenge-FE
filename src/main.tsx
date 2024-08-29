import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from './utils/index.ts';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ChakraProvider theme={theme} resetCSS={false}>
        <App />
      </ChakraProvider>
    </ErrorBoundary>
  </StrictMode>
);
