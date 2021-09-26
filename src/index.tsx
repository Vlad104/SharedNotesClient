import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

import { createTheme, ThemeProvider } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
