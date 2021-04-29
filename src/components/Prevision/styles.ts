import styled from 'styled-components/native';
import { moderateScale } from '~/theme';
import { getTheme } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');

// Spacings
const smallSpacing = getTheme('smallSpacing');
const largeSpacing = getTheme('largeSpacing');
const giantSpacing = getTheme('giantSpacing');

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const MainPrevision = styled.View`
  align-items: center;
  margin-top: ${largeSpacing};
`;

export const TitleMain = styled.Text`
  font-size: ${moderateScale(60)};
  color: ${primaryMain};
`;

export const WrapperDataPrevision = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(16)};
`;

export const Value = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(40)};
`;

export const WrapperLocation = styled.View`
  padding: 0 ${smallSpacing} ${giantSpacing};
`;

export const TitleInfo = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(30)};
  text-transform: capitalize;
`;

export const TitleLocation = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(20)};
`;

export const WrapperPrevision = styled.View`
  align-items: center;
`;
