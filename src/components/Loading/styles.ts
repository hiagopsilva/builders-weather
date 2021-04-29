import styled from 'styled-components/native';
import { moderateScale } from '~/theme';
import { getTheme } from '~/utils';

// Colors
const primaryMain = getTheme('primary.main');

// Spacing
const smallSpacing = getTheme('smallSpacing');
const largeSpacing = getTheme('largeSpacing');

export const Wrapper = styled.View`
  flex: 1;
  padding-top: ${largeSpacing};

  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${primaryMain};
  font-size: ${moderateScale(16)};

  margin-top: ${smallSpacing};
`;
