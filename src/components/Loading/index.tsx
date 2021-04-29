import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Wrapper, Text } from './styles';

const Loading = (): React.ReactElement => (
  <>
    <Wrapper>
      <ActivityIndicator color="#FFF" size={40} />
      <Text>Carregando...</Text>
    </Wrapper>
  </>
);

export default Loading;
