import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  align-items: center;
  padding-top: 10px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 20px;
`;
export const Prevision = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const MainPrevision = styled.View`
  align-items: center;
  margin-top: 40px;
`;

export const TitleMain = styled.Text`
  font-size: 60px;
  color: #fff;
`;

export const FooterPrevision = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const TitlePrevision = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ValuePrevision = styled.Text`
  color: #fff;
  font-size: 40px;
`;

export const LocationPrevision = styled.View`
  padding-horizontal: 15px;
  padding-bottom: 70px;
`;

export const TitleInfo = styled.Text`
  color: #fff;
  font-size: 40px;
  text-transform: capitalize;
`;

export const TitleLocation = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
  width: 200px;
  height: 40px;
  margin-bottom: 40px;
  background-color: #fff;

  align-self: center;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  padding-top: 50px;

  justify-content: center;
  align-items: center;
`;

export const TextLoading = styled.Text`
  color: #fff;
  font-size: 16px;

  margin-top: 10px;
`;
