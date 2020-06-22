import React from 'react';
import {Text} from 'react-native';

import {ButtonUpdate, ButtonText} from './styles';

const Button = ({getDataPrevision}) => {
  return (
    <ButtonUpdate onPress={getDataPrevision}>
      <ButtonText>Atualizar</ButtonText>
    </ButtonUpdate>
  );
};

export default Button;
