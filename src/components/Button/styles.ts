import styled from 'styled-components/native';
import { moderateScale } from '~/theme';
import { getTheme } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');

// Radius
const buttonRadius = getTheme('buttonRadius');
const smallRadius = getTheme('smallRadius');

export const Wrapper = styled.TouchableOpacity`
  width: ${moderateScale(200)};
  height: ${moderateScale(40)};
  margin-bottom: ${buttonRadius};
  background-color: ${primaryMain};

  align-self: center;
  align-items: center;
  justify-content: center;

  border-radius: ${smallRadius};
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: ${moderateScale(16)};
`;
