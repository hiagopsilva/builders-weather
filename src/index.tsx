import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'mobx-react';
import Routes from '~/routes';
import store from '~/stores';
import { colors, radius, spacings } from '~/theme';
import './utils/config/reactotron';
import { AlertMessage } from '~/utils';

const theme = { ...colors, ...spacings, ...radius };

const App = (): React.ReactElement => {
  return (
    <Provider {...store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#9A01FE" />
        <Routes />
        <AlertMessage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
