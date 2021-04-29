import { getTheme } from '@platformbuilders/helpers';
import styled from 'styled-components/native';

// Colors
const primaryMain = getTheme('primary.main');

export const HeaderContainer = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const HeaderTitle = styled.Text`
  color: ${primaryMain};
  font-size: 20px;
`;
