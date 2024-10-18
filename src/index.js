import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './Dashboard';
import theme from './theme';  // Import the custom theme
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </React.StrictMode>
);
