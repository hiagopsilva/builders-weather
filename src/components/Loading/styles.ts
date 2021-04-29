import { getTheme } from '@platformbuilders/helpers';
import styled from 'styled-components/native';

// Colors
const primaryMain = getTheme('primary.main');

export const ContainerLoading = styled.View`
  flex: 1;
  padding-top: 50px;

  justify-content: center;
  align-items: center;
`;

export const TextLoading = styled.Text`
  color: ${primaryMain};
  font-size: 16px;

  margin-top: 10px;
`;
