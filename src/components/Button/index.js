import React from 'react';

import {ButtonUpdate, ButtonText} from './styles';

const Button = ({functionPrevision}) => {
  return (
    <ButtonUpdate onPress={functionPrevision}>
      <ButtonText>Atualizar</ButtonText>
    </ButtonUpdate>
  );
};

export default Button;
