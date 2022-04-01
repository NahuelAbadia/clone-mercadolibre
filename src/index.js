import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store/index'
import './index.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>
);