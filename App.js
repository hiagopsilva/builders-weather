import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes.js';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#814EAA" />
      <Routes />
    </>
  );
};

export default App;
