import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ContainerLoading, TextLoading } from './styles';

const Loading = (): React.ReactElement => (
  <>
    <ContainerLoading>
      <ActivityIndicator color="#FFF" size={40} />
      <TextLoading>Carregando...</TextLoading>
    </ContainerLoading>
  </>
);

export default Loading;
