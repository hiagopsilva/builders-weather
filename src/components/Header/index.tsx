import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { HeaderContainer, HeaderTitle } from './styles';

const Header = (): React.ReactElement => (
  <HeaderContainer>
    <HeaderTitle>
      Weather
      <Icon name="sun" size={20} color="#FFF" />
    </HeaderTitle>
  </HeaderContainer>
);

export default Header;
