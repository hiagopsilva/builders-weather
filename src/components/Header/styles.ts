import styled from 'styled-components/native';
import { moderateScale } from '~/theme';
import { getTheme } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');

// Spacings
const smallSpacing = getTheme('smallSpacing');

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: ${smallSpacing};
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(20)};
  margin-right: ${moderateScale(10)};
`;
