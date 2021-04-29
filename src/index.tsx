import 'dayjs/locale/pt-br';
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'mobx-react';

import store from '~/stores';
import Routes from '~/routes';

function App(): React.ReactElement {
  return (
    <Provider {...store}>
      <StatusBar barStyle="light-content" backgroundColor="#9A01FE" />
      <Routes />
    </Provider>
  );
}

export default App;
