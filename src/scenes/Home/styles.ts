import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import BackgroundImage from '~/assets/night.jpg';
import { Header, Prevision, Loading, Button } from '~/components';

export const Wrapper = styled(ImageBackground).attrs({
  source: BackgroundImage,
})`
  flex: 1;
`;

export const HeaderStyled = styled(Header)``;

export const PrevisionStyled = styled(Prevision)``;

export const LoadingStyled = styled(Loading)``;

export const ButtonStyled = styled(Button)``;
