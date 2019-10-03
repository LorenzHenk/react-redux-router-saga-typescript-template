import React from 'react';

import { Provider } from 'react-redux';

import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

import configureStore from './store';

import Layout from './components/layout';

import configureTheme from './theme';

import Routing from './routes';

const store = configureStore();

const theme = configureTheme();

const App: React.FC = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>{<Routing />}</Layout>
    </MuiThemeProvider>
  </Provider>
);

export default App;
