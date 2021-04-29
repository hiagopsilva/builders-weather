import { getTheme } from '@platformbuilders/helpers';
import styled from 'styled-components/native';

// Colors
const primaryMain = getTheme('primary.main');

export const ButtonUpdate = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  margin-bottom: 40px;
  background-color: ${primaryMain};

  align-self: center;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
