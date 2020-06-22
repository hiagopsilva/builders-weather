import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {HeaderContainer, HeaderTitle} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        Challenge Builders <Icon name="sun" size={20} color="#FFF" />
      </HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
