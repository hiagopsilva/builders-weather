import { getTheme } from '@platformbuilders/helpers';
import styled from 'styled-components/native';

// Colors
const primaryMain = getTheme('primary.main');

export const PrevisionContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const MainPrevision = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const TitleMain = styled.Text`
  font-size: 60px;
  color: ${primaryMain};
`;

export const WrapperDataPrevision = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Title = styled.Text`
  color: ${primaryMain};
  font-size: 16px;
`;

export const Value = styled.Text`
  color: ${primaryMain};
  font-size: 40px;
`;

export const WrapperLocation = styled.View`
  padding: 0 15px 70px;
`;

export const TitleInfo = styled.Text`
  color: ${primaryMain};
  font-size: 30px;
  text-transform: capitalize;
`;

export const TitleLocation = styled.Text`
  color: ${primaryMain};
  font-size: 20px;
`;

export const WrapperPrevision = styled.View`
  align-items: center;
`;
