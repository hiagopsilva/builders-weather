import React from 'react';

import { ButtonUpdate, ButtonText } from './styles';

type Props = {
  onPress: () => void;
};

const Button: React.FC<Props> = onPress => (
  <ButtonUpdate {...onPress}>
    <ButtonText>Atualizar</ButtonText>
  </ButtonUpdate>
);

export default Button;
