import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Wrapper, Title } from './styles';

const Header = (): React.ReactElement => (
  <Wrapper>
    <Title>Weather</Title>
    <Icon name="sun" size={20} color="#FFF" />
  </Wrapper>
);

export default Header;
