import React from 'react';

import { Wrapper, ButtonText } from './styles';

type Props = {
  onPress: () => void;
};

const Button: React.FC<Props> = onPress => (
  <Wrapper {...onPress}>
    <ButtonText>Atualizar</ButtonText>
  </Wrapper>
);

export default Button;
